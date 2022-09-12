import { mdiChartTimelineVariant, mdiGithub } from '@mdi/js'
import Head from 'next/head'
import React from 'react'
import type { ReactElement } from 'react'
import BaseButton from '../components/BaseButton'
import LayoutAuthenticated from '../components/layouts/Authenticated'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiChartTimelineVariant} title="Overview" main>
          <BaseButton
            href="https://github.com/justboil/admin-one-vue-tailwind"
            target="_blank"
            icon={mdiGithub}
            label="Start on GitHub"
            color="contrast"
            roundedFull
            small
          />
        </SectionTitleLineWithButton>
      </SectionMain>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
