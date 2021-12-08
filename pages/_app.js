import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import Layouts from "../src/Layouts";
function MyApp({ Component, pageProps }) {
  <Head>
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
  </Head>

  const client = new ApolloClient({
    uri: 'https://b2cdemo.getswift.asia/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <Layouts>
      <Component {...pageProps} />
     </Layouts>
    </ApolloProvider>

  )
}

export default MyApp
