import Head from "next/head"
import { ReactElement } from "react"
import LayoutAuthenticated from "../components/layouts/Authenticated"
import SectionTitle from "../components/SectionTitle"
import { appTitle } from "../src/config"

const UiPage = () => {
  return (
    <>
      <Head>
        <title>UI - {appTitle}</title>
      </Head>

      <div className="min-h-screen">
        <SectionTitle first>Demo is coming soon</SectionTitle>
      </div>
    </>
  )
}

UiPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default UiPage