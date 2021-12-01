import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import GuestLayout from "../src/layouts";
function MyApp({ Component, pageProps }) {
 
  const client = new ApolloClient({
    uri: 'https://b2cdemo.getswift.asia/graphql',
    cache: new InMemoryCache()
  });

  return (
  <ApolloProvider client = {client}>
      {/* <GuestLayout> */}
  <Component {...pageProps} />
  {/* </GuestLayout> */}
  </ApolloProvider>

  )}
  
export default MyApp
