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
import { Field, Formik } from 'formik'
import Head from 'next/head'
import { ReactElement } from 'react'
import BaseButton from '../components/BaseButton'
import BaseButtons from '../components/BaseButtons'
import BaseDivider from '../components/BaseDivider'
import CardBox from '../components/CardBox'
import CardBoxComponentEmpty from '../components/CardBoxComponentEmpty'
import CardBoxComponentTitle from '../components/CardBoxComponentTitle'
import FormCheckRadio from '../components/FormCheckRadio'
import FormCheckRadioGroup from '../components/FormCheckRadioGroup'
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

  const CardSamplesFooter = (
    <BaseButtons>
      <BaseButton label="Confirm" color="info" />
      <BaseButton label="Cancel" color="info" outline />
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

      <Formik initialValues={{ outline: false }} onSubmit={() => null}>
        {({ values }) => (
          <>
            <SectionTitle custom>
              <h1 className="text-2xl text-gray-500 dark:text-slate-400">Notifications</h1>
              <div className="flex items-center justify-center mt-6">
                <FormCheckRadio type="switch" label="Outline">
                  <Field type="checkbox" name="outline" />
                </FormCheckRadio>
              </div>
            </SectionTitle>

            <SectionMain>
              <NotificationBar
                color="info"
                icon={mdiInformation}
                button={
                  <BaseButton
                    color={values.outline ? 'info' : 'white'}
                    label="Button"
                    roundedFull
                    small
                    outline={values.outline}
                  />
                }
                outline={values.outline}
              >
                <b>Info state</b>. NotificationBar
              </NotificationBar>

              <NotificationBar
                color="success"
                icon={mdiCheckCircle}
                button={
                  <BaseButton
                    color={values.outline ? 'success' : 'white'}
                    label="Button"
                    roundedFull
                    small
                    outline={values.outline}
                  />
                }
                outline={values.outline}
              >
                <b>Success state</b>. NotificationBar
              </NotificationBar>

              <NotificationBar
                color="warning"
                icon={mdiAlert}
                button={
                  <BaseButton
                    color={values.outline ? 'warning' : 'white'}
                    label="Button"
                    roundedFull
                    small
                    outline={values.outline}
                  />
                }
                outline={values.outline}
              >
                <b>Warning state</b>. NotificationBar
              </NotificationBar>

              <NotificationBar
                color="danger"
                icon={mdiAlertCircle}
                button={
                  <BaseButton
                    color={values.outline ? 'danger' : 'white'}
                    label="Button"
                    roundedFull
                    small
                    outline={values.outline}
                  />
                }
                outline={values.outline}
              >
                <b>Danger state</b>. NotificationBar
              </NotificationBar>

              <NotificationBar color="contrast" icon={mdiContrastCircle} outline={values.outline}>
                <b>Contrast</b>. NotificationBar
              </NotificationBar>
            </SectionMain>
          </>
        )}
      </Formik>

      <SectionTitle>Buttons</SectionTitle>

      <SectionMain>
        <CardBox>
          <Formik
            initialValues={{ outline: false, small: false, rounded: false, disabled: false }}
            onSubmit={() => null}
          >
            {({ values }) => (
              <>
                <FormCheckRadioGroup>
                  <FormCheckRadio type="switch" label="Outline">
                    <Field type="checkbox" name="outline" />
                  </FormCheckRadio>
                  <FormCheckRadio type="switch" label="Small">
                    <Field type="checkbox" name="small" />
                  </FormCheckRadio>
                  <FormCheckRadio type="switch" label="Rounded">
                    <Field type="checkbox" name="rounded" />
                  </FormCheckRadio>
                  <FormCheckRadio type="switch" label="Disabled">
                    <Field type="checkbox" name="disabled" />
                  </FormCheckRadio>
                </FormCheckRadioGroup>

                <BaseDivider />

                <BaseButtons>
                  <BaseButton
                    color="lightDark"
                    label="Button"
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <BaseButton
                    color="contrast"
                    label="Button"
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <BaseButton
                    color="info"
                    label="Button"
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <BaseButton
                    color="success"
                    label="Button"
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <BaseButton
                    color="warning"
                    label="Button"
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <BaseButton
                    color="danger"
                    label="Button"
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                </BaseButtons>

                <BaseDivider />

                <BaseButtons>
                  <BaseButton
                    color="lightDark"
                    label="Button"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <BaseButton
                    color="contrast"
                    label="Button"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <BaseButton
                    color="info"
                    label="Button"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <BaseButton
                    color="success"
                    label="Button"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <BaseButton
                    color="warning"
                    label="Button"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <BaseButton
                    color="danger"
                    label="Button"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                </BaseButtons>

                <BaseDivider />

                <BaseButtons>
                  <BaseButton
                    color="lightDark"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <BaseButton
                    color="contrast"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <BaseButton
                    color="info"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <BaseButton
                    color="success"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <BaseButton
                    color="warning"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <BaseButton
                    color="danger"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                </BaseButtons>
              </>
            )}
          </Formik>
        </CardBox>
      </SectionMain>

      <SectionTitle>Pills</SectionTitle>

      <SectionMain>
        <CardBox>
          <Formik
            initialValues={{ outline: false, small: false, icon: true }}
            onSubmit={() => null}
          >
            {({ values }) => (
              <>
                <FormCheckRadioGroup>
                  <FormCheckRadio type="switch" label="Outline">
                    <Field type="checkbox" name="outline" />
                  </FormCheckRadio>
                  <FormCheckRadio type="switch" label="Small">
                    <Field type="checkbox" name="small" />
                  </FormCheckRadio>
                  <FormCheckRadio type="switch" label="Icon">
                    <Field type="checkbox" name="icon" />
                  </FormCheckRadio>
                </FormCheckRadioGroup>
                <BaseDivider />
                <BaseButtons>
                  <PillTag
                    color="contrast"
                    label="Contrast"
                    icon={values.icon ? mdiTrendingUp : null}
                    outline={values.outline}
                    small={values.small}
                  />
                  <PillTag
                    color="info"
                    label="Info"
                    icon={values.icon ? mdiTrendingUp : null}
                    outline={values.outline}
                    small={values.small}
                  />
                  <PillTag
                    color="success"
                    label="Info"
                    icon={values.icon ? mdiTrendingUp : null}
                    outline={values.outline}
                    small={values.small}
                  />
                  <PillTag
                    color="warning"
                    label="Info"
                    icon={values.icon ? mdiTrendingUp : null}
                    outline={values.outline}
                    small={values.small}
                  />
                  <PillTag
                    color="danger"
                    label="Info"
                    icon={values.icon ? mdiTrendingUp : null}
                    outline={values.outline}
                    small={values.small}
                  />
                </BaseButtons>
              </>
            )}
          </Formik>
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
