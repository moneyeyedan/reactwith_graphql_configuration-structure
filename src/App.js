import React from 'react';
import './App.css';
// import RouterApp from './Routers/Index';
import ApolloGQLclient from './ApolloGQLclient'
// import AppTheme from './AppThemes';

function App() {
  return (
    <ApolloGQLclient>
      {/* <AppTheme>
        <div className="App">
          <RouterApp />
        </div>
      </AppTheme> */}
    </ApolloGQLclient>

  );
}

export default App;
