import Head from 'next/head'
import LayoutAuthenticated from '../components/layouts/authenticated'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1 className="text-6xl font-bold">The page</h1>
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
