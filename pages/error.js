import Head from 'next/head'
import BaseButton from '../components/baseButton'
import CardBox from '../components/cardBox'
import SectionFullScreen from '../components/sectionFullScreen'
import LayoutGuest from '../components/layouts/guest'

export default function Error() {
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>

      <SectionFullScreen bg="pinkRed">
        <CardBox className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl" footer={<BaseButton href="/" label="Done" color="danger" />}>
          <div className="space-y-3">
            <h1 className="text-2xl">Unhandled exception</h1>

            <p>An Error Occurred</p>
          </div>

          
        </CardBox>
      </SectionFullScreen>
    </>
  )
}

Error.getLayout = function getLayout(page) {
  return (
    <LayoutGuest>
      {page}
    </LayoutGuest>
  )
}