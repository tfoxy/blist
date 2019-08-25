import React, { createContext, useMemo, useContext, useEffect } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink, split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

interface ApolloClientOptions {
  authToken: string;
  wsLink: WebSocketLink;
}

interface AuxiliarApolloClientOptions {
  authToken: string;
  wsLink?: WebSocketLink;
}

const ApolloClientOptionsContext = createContext<ApolloClientOptions>({
  authToken: '',
  wsLink: new WebSocketLink({ uri: 'ws://localhost', options: { lazy: true } }),
});

function createWebScoketLink(options: AuxiliarApolloClientOptions) {
  return new WebSocketLink({
    uri: `wss://${process.env.REACT_APP_GRAPHQL_API}`,
    options: {
      lazy: true,
      reconnect: true,
      connectionParams() {
        if (options.authToken) {
          return {
            headers: {
              Authorization: `Bearer ${options.authToken}`,
            },
          };
        }
        return null;
      },
    },
  });
}

function createHttpLink(options: ApolloClientOptions) {
  const httpLink = new HttpLink({
    uri: `https://${process.env.REACT_APP_GRAPHQL_API}`,
  });

  const middlewareLink = new ApolloLink((operation, forward) => {
    if (!forward) return null;
    if (options.authToken) {
      operation.setContext({
        headers: {
          Authorization: `Bearer ${options.authToken}`,
        },
      });
    }
    return forward(operation);
  });

  return middlewareLink.concat(httpLink);
}

function createClient(options: ApolloClientOptions) {
  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    options.wsLink,
    createHttpLink(options),
  );

  const client̉ = new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) console.log('[GraphQL errors]', graphQLErrors);
        if (networkError) console.log('[Network error]', networkError);
      }),
      link,
    ]),
    cache: new InMemoryCache(),
  });

  return client̉;
}

export function useApolloAuthenticationToken(token: string) {
  const apolloClientOptions = useContext(ApolloClientOptionsContext);
  apolloClientOptions.authToken = token;
  useEffect(() => {
    const subscriptionClient = apolloClientOptions.wsLink['subscriptionClient'];
    if (subscriptionClient.status === WebSocket.OPEN) {
      subscriptionClient.close();
      subscriptionClient.connect();
    }
  }, [apolloClientOptions.authToken, apolloClientOptions.wsLink]);
}

export default function CustomApolloProvider({ children }: { children: React.ReactNode }) {
  const apolloClientOptions = useMemo(() => {
    const options: AuxiliarApolloClientOptions = { authToken: '' };
    options.wsLink = createWebScoketLink(options);
    return options as ApolloClientOptions;
  }, []);
  const client = useMemo(() => createClient(apolloClientOptions), [apolloClientOptions]);
  return (
    <ApolloClientOptionsContext.Provider value={apolloClientOptions}>
      <ApolloProvider client={client} children={children} />
    </ApolloClientOptionsContext.Provider>
  );
}
