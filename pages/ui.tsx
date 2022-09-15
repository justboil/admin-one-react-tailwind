import {
  mdiAlert,
  mdiAlertCircle,
  mdiCheckCircle,
  mdiContrastCircle,
  mdiInformation,
  mdiOpenInNew,
  mdiReload,
  mdiTrendingUp,
} from '@mdi/js'
import Head from 'next/head'
import { ReactElement } from 'react'
import BaseButton from '../components/BaseButton'
import BaseButtons from '../components/BaseButtons'
import BaseDivider from '../components/BaseDivider'
import CardBox from '../components/CardBox'
import CardBoxComponentEmpty from '../components/CardBoxComponentEmpty'
import CardBoxComponentTitle from '../components/CardBoxComponentTitle'
import LayoutAuthenticated from '../components/layouts/Authenticated'
import NotificationBar from '../components/NotificationBar'
import PillTag from '../components/PillTag'
import SectionMain from '../components/SectionMain'
import SectionTitle from '../components/SectionTitle'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import { appTitle } from '../src/config'
import { useAppDispatch } from '../src/stores/hooks'
import { setDarkMode } from '../src/stores/styleSlice'

const UiPage = () => {
  const dispatch = useAppDispatch()

  const NotificationSampleButton = <BaseButton color="white" label="Button" roundedFull small />

  const CardSamplesFooter = (
    <BaseButtons>
      <BaseButton label="Confirm" color="info" isGrouped />
      <BaseButton label="Cancel" color="info" isGrouped outline />
    </BaseButtons>
  )

  return (
    <>
      <Head>
        <title>UI - {appTitle}</title>
      </Head>

      <SectionTitle first>Dark mode</SectionTitle>

      <SectionMain>
        <CardBox className="md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto">
          <div className="text-center py-24 lg:py-12 text-gray-500 dark:text-slate-400">
            <BaseButton
              label="Toggle"
              color="contrast"
              onClick={() => dispatch(setDarkMode(null))}
            />
          </div>
        </CardBox>
      </SectionMain>

      <SectionTitle>Notifications</SectionTitle>

      <SectionMain>
        <NotificationBar color="info" icon={mdiInformation} button={NotificationSampleButton}>
          <b>Info state</b>. NotificationBar
        </NotificationBar>

        <NotificationBar color="success" icon={mdiCheckCircle} button={NotificationSampleButton}>
          <b>Success state</b>. NotificationBar
        </NotificationBar>

        <NotificationBar color="warning" icon={mdiAlert} button={NotificationSampleButton}>
          <b>Warning state</b>. NotificationBar
        </NotificationBar>

        <NotificationBar color="danger" icon={mdiAlertCircle} button={NotificationSampleButton}>
          <b>Danger state</b>. NotificationBar
        </NotificationBar>

        <NotificationBar color="contrast" icon={mdiContrastCircle}>
          <b>Contrast</b>. NotificationBar
        </NotificationBar>
      </SectionMain>

      <SectionTitle>Buttons</SectionTitle>

      <SectionMain>
        <CardBox>
          <BaseButtons>
            <BaseButton color="lightDark" label="Button" isGrouped />
            <BaseButton color="contrast" label="Button" isGrouped />
            <BaseButton color="info" label="Button" isGrouped />
            <BaseButton color="success" label="Button" isGrouped />
            <BaseButton color="warning" label="Button" isGrouped />
            <BaseButton color="danger" label="Button" isGrouped />
          </BaseButtons>

          <BaseDivider />

          <BaseButtons>
            <BaseButton color="lightDark" label="Button" icon={mdiOpenInNew} isGrouped />
            <BaseButton color="contrast" label="Button" icon={mdiOpenInNew} isGrouped />
            <BaseButton color="info" label="Button" icon={mdiOpenInNew} isGrouped />
            <BaseButton color="success" label="Button" icon={mdiOpenInNew} isGrouped />
            <BaseButton color="warning" label="Button" icon={mdiOpenInNew} isGrouped />
            <BaseButton color="danger" label="Button" icon={mdiOpenInNew} isGrouped />
          </BaseButtons>

          <BaseDivider />

          <BaseButtons>
            <BaseButton color="lightDark" icon={mdiOpenInNew} isGrouped />
            <BaseButton color="contrast" icon={mdiOpenInNew} isGrouped />
            <BaseButton color="info" icon={mdiOpenInNew} isGrouped />
            <BaseButton color="success" icon={mdiOpenInNew} isGrouped />
            <BaseButton color="warning" icon={mdiOpenInNew} isGrouped />
            <BaseButton color="danger" icon={mdiOpenInNew} isGrouped />
          </BaseButtons>
        </CardBox>
      </SectionMain>

      <SectionTitle>Pills</SectionTitle>

      <SectionMain>
        <CardBox>
          <BaseButtons>
            <PillTag color="contrast" label="Contrast" icon={mdiTrendingUp} isGrouped />
            <PillTag color="info" label="Info" icon={mdiTrendingUp} isGrouped />
            <PillTag color="success" label="Info" icon={mdiTrendingUp} isGrouped />
            <PillTag color="warning" label="Info" icon={mdiTrendingUp} isGrouped />
            <PillTag color="danger" label="Info" icon={mdiTrendingUp} isGrouped />
          </BaseButtons>
        </CardBox>
      </SectionMain>

      <SectionTitle>Cards</SectionTitle>

      <SectionMain>
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
          <CardBox footer={CardSamplesFooter}>
            <CardBoxComponentTitle title="With title & icon">
              <BaseButton icon={mdiReload} color="whiteDark" roundedFull />
            </CardBoxComponentTitle>
            <div className="space-y-3">
              <p>Card with title, icon & footer</p>
            </div>
          </CardBox>

          <CardBox footer={CardSamplesFooter}>Just body & footer</CardBox>
        </div>

        <SectionTitleLineWithButton icon={mdiAlertCircle} title="Empty variation" />

        <CardBox>
          <CardBoxComponentEmpty />
        </CardBox>
      </SectionMain>
    </>
  )
}

UiPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default UiPage
