import React, { createContext, useMemo, useContext } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink, split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import MutableLink from './MutableLink';

interface CustomApolloClientOptions {
  authToken: string;
  wsLink: MutableLink;
}

const CustomApolloClientOptionsContext = createContext<CustomApolloClientOptions>(createCustomApolloClientOptions());

function createCustomApolloClientOptions(): CustomApolloClientOptions {
  return { authToken: '', wsLink: new MutableLink() };
}

function createWebScoketLink(options: CustomApolloClientOptions) {
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

function createHttpLink(options: CustomApolloClientOptions) {
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

function createClient(options: CustomApolloClientOptions) {
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
  const apolloClientOptions = useContext(CustomApolloClientOptionsContext);
  apolloClientOptions.authToken = token;
  apolloClientOptions.wsLink.link = useMemo(() => {
    const prevWsLink = apolloClientOptions.wsLink.link;
    if (prevWsLink) {
      const subscriptionClient = (prevWsLink as WebSocketLink)['subscriptionClient'];
      if (subscriptionClient.status === WebSocket.OPEN) {
        subscriptionClient.close();
      } else if (subscriptionClient.status === WebSocket.CONNECTING) {
        subscriptionClient.onConnected(() => {
          subscriptionClient.close();
        });
      }
    }
    return token ? createWebScoketLink(apolloClientOptions) : null;
  }, [apolloClientOptions, token]);
}

export default function CustomApolloProvider({ children }: { children: React.ReactNode }) {
  const customApolloClientOptions = useMemo(createCustomApolloClientOptions, []);
  const client = useMemo(() => createClient(customApolloClientOptions), [customApolloClientOptions]);
  return (
    <CustomApolloClientOptionsContext.Provider value={customApolloClientOptions}>
      <ApolloProvider client={client} children={children} />
    </CustomApolloClientOptionsContext.Provider>
  );
}
