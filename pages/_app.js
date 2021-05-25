import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return(
  <ChakraProvider>
    <Head>
      <title>Pubertal Development Calculator</title>
      <meta name="google-site-verification" content="JlvY-nyZzr7q1vd3vdVSHB4kUaSZxNxo33xiTjkoF70" />
    </Head>
    <Component {...pageProps} />
  </ChakraProvider>
  );
}

export default MyApp
