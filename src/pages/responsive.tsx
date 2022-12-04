import Head from 'next/head'
import Image from 'next/image'
import React, { ReactElement } from 'react'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/SectionMain'
import SectionTitle from '../components/SectionTitle'
import { appTitle, getPageTitle } from '../config'

const ResponsivePage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Responsive')}</title>
      </Head>

      <SectionTitle first>Mobile & Tablet</SectionTitle>

      <SectionMain>
        <div className="md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden">
          <Image
            src="https://static.justboil.me/templates/one/one-tailwind-vue-mobile.png"
            width={1920}
            height={960}
            alt={`Mobile & Tablet - ${appTitle}`}
            className="block"
          />
        </div>
      </SectionMain>

      <SectionTitle>Small laptop 1024px</SectionTitle>

      <SectionMain>
        <div className="md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden">
          <Image
            src="https://static.justboil.me/templates/one/one-tailwind-vue-1024.png"
            width={1920}
            height={960}
            alt={`Small laptop 1024px - ${appTitle}`}
            className="block"
          />
        </div>
      </SectionMain>

      <SectionMain>
        <div className="md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden">
          <Image
            src="https://static.justboil.me/templates/one/one-tailwind-vue-1024-menu-open.png"
            width={1920}
            height={960}
            alt={`Small laptop 1024px (menu is open) - ${appTitle}`}
            className="block"
          />
        </div>
      </SectionMain>

      <SectionTitle>Laptop & desktop</SectionTitle>

      <SectionMain>
        <div className="md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden">
          <Image
            src="https://static.justboil.me/templates/one/one-tailwind-vue-widescreen.png"
            width={1920}
            height={960}
            alt={`Laptop & desktop - ${appTitle}`}
            className="block"
          />
        </div>
      </SectionMain>
    </>
  )
}

ResponsivePage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default ResponsivePage
