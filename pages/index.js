import { mdiChartTimelineVariant, mdiGithub } from '@mdi/js'
import Head from 'next/head'
import BaseButton from '../components/baseButton'
import LayoutAuthenticated from '../components/layouts/authenticated'
import SectionMain from '../components/sectionMain'
import SectionTitleLineWithButton from '../components/sectionTitleLineWithButton'

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

Home.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
