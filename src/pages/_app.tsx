import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Processamento de Dados</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
