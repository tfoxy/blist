import React from 'react';
import CustomApolloProvider from './services/CustomApolloProvider';
import { AuthenticatedUserProvider } from './services/useAuthenticatedUser';
import AppRouter from './components/AppRouter';
import './App.css';

const App: React.FC = () => {
  return (
    <div id="app">
      <CustomApolloProvider>
        <AuthenticatedUserProvider>
          <AppRouter />
        </AuthenticatedUserProvider>
      </CustomApolloProvider>
    </div>
  );
};

export default App;
