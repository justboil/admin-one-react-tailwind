import React from 'react'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import {store} from '../src/stores/store'
import { Provider } from 'react-redux'
import '../styles/main.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <Provider store={store}>
      {getLayout(
        <>
          <Head>
            <link rel="icon" href="/admin-one-react-tailwind/favicon.png" />
          </Head>
          <Component {...pageProps} />
        </>
      )}
    </Provider>
  )
}

export default MyApp
