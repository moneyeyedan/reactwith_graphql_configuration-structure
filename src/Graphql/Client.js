import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
// import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
// import { setContext } from 'apollo-link-context';
import dotenv from 'dotenv';
dotenv.config();

const httpLink = new HttpLink({
    uri: "http://localhost:4000/graphql",
});

// const wsLink = new WebSocketLink({
//     uri: "ws://localhost:2022/graphql",
//     options: {
//         reconnect: true,
//         connectionParams: {},
//     },
// });


const link = split(
    ({ query }) => {
        const { kind } = getMainDefinition(query);
        return kind === 'OperationDefinition';
    },
    // wsLink,
    httpLink
);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

export default client;
