import React from 'react';
import { ApolloProvider } from "react-apollo";
import client from './Graphql/Client';

const AppGQLClient = (props) => {
    return (
        <ApolloProvider client={client} >
            {props.children}
        </ApolloProvider>
    )
}

export default AppGQLClient;