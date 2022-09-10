import Head from 'next/head'
import store from '../src/stores/store'
import { Provider } from 'react-redux'
import '../styles/main.css'

function MyApp({ Component, pageProps }) {
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
