
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";


client
    .query({
        query: gql`
    {
     query categories{items{
      id
      name
      image
    }}}
    `
    })
    .then(result => console.log(result));

export default client
