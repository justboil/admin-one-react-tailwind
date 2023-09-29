import {
  mdiAlert,
  mdiAlertCircle,
  mdiCheckCircle,
  mdiClose,
  mdiContrastCircle,
  mdiInformation,
  mdiOpenInNew,
  mdiReload,
  mdiTrendingUp,
} from '@mdi/js'
import { Field, Formik } from 'formik'
import Head from 'next/head'
import { useState } from 'react'
import type { ReactElement } from 'react'
import Button from '../components/Button'
import Buttons from '../components/Buttons'
import Divider from '../components/Divider'
import CardBox from '../components/CardBox'
import CardBoxComponentEmpty from '../components/CardBox/Component/Empty'
import CardBoxComponentTitle from '../components/CardBox/Component/Title'
import CardBoxModal from '../components/CardBox/Modal'
import FormCheckRadio from '../components/Form/CheckRadio'
import FormCheckRadioGroup from '../components/Form/CheckRadioGroup'
import LayoutAuthenticated from '../layouts/Authenticated'
import NotificationBar from '../components/NotificationBar'
import PillTag from '../components/PillTag'
import SectionMain from '../components/Section/Main'
import SectionTitle from '../components/Section/Title'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { useAppDispatch } from '../stores/hooks'
import { setDarkMode } from '../stores/darkModeSlice'
import { getPageTitle } from '../config'

const UiPage = () => {
  const dispatch = useAppDispatch()

  const CardSamplesFooter = (
    <Buttons>
      <Button label="Confirm" color="info" />
      <Button label="Cancel" color="info" outline />
    </Buttons>
  )

  const modalSampleCardClassName = 'cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto'

  const modalSampleContents = (
    <>
      <p>
        Lorem ipsum dolor sit amet <b>adipiscing elit</b>
      </p>
      <p>This is sample modal</p>
    </>
  )

  const modalFooterInfo = (
    <Buttons>
      <Button label="Confirm" color="info" />
      <Button label="Cancel" color="info" outline />
    </Buttons>
  )

  const modalFooterDanger = (
    <Buttons>
      <Button label="Done" color="danger" />
    </Buttons>
  )

  const modalFooterSuccess = (
    <Buttons>
      <Button label="Done" color="success" />
    </Buttons>
  )

  const handleModalAction = () => {
    setIsModalInfoActive(false)
    setIsModalDangerActive(false)
    setIsModalSuccessActive(false)
  }

  const [isModalInfoActive, setIsModalInfoActive] = useState(false)
  const [isModalDangerActive, setIsModalDangerActive] = useState(false)
  const [isModalSuccessActive, setIsModalSuccessActive] = useState(false)

  return (
    <>
      <Head>
        <title>{getPageTitle('UI')}</title>
      </Head>

      <SectionTitle first>Dark mode</SectionTitle>

      <SectionMain>
        <CardBox className="md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto">
          <div className="text-center py-24 lg:py-12 text-gray-500 dark:text-slate-400">
            <Button label="Toggle" color="contrast" onClick={() => dispatch(setDarkMode(null))} />
          </div>
        </CardBox>
      </SectionMain>

      <SectionTitle>Modal examples</SectionTitle>

      <CardBoxModal
        title="Please confirm action"
        buttonColor="info"
        buttonLabel="Confirm"
        isActive={isModalInfoActive}
        onConfirm={handleModalAction}
        onCancel={handleModalAction}
      >
        {modalSampleContents}
      </CardBoxModal>

      <CardBoxModal
        title="Unhandled exception"
        buttonColor="danger"
        buttonLabel="Done"
        isActive={isModalDangerActive}
        onConfirm={handleModalAction}
      >
        {modalSampleContents}
      </CardBoxModal>

      <CardBoxModal
        title="Success"
        buttonColor="success"
        buttonLabel="Done"
        isActive={isModalSuccessActive}
        onConfirm={handleModalAction}
      >
        {modalSampleContents}
      </CardBoxModal>

      <SectionMain>
        <div className="space-y-12">
          <CardBox
            className={modalSampleCardClassName}
            footer={modalFooterInfo}
            onClick={() => setIsModalInfoActive(true)}
            isHoverable
          >
            <CardBoxComponentTitle title="Please confirm action">
              <Button icon={mdiClose} color="whiteDark" small roundedFull />
            </CardBoxComponentTitle>
            <div className="space-y-3">
              <p>Click to see in action</p>
            </div>
          </CardBox>

          <CardBox
            className={modalSampleCardClassName}
            footer={modalFooterDanger}
            onClick={() => setIsModalDangerActive(true)}
            isHoverable
          >
            <CardBoxComponentTitle title="Unhandled exception" />

            <div className="space-y-3">
              <p>Click to see in action</p>
            </div>
          </CardBox>

          <CardBox
            className={modalSampleCardClassName}
            footer={modalFooterSuccess}
            onClick={() => setIsModalSuccessActive(true)}
            isHoverable
          >
            <CardBoxComponentTitle title="Success" />

            <div className="space-y-3">
              <p>Click to see in action</p>
            </div>
          </CardBox>
        </div>
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
                  <Button
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
                  <Button
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
                  <Button
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
                  <Button
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

                <Divider />

                <Buttons>
                  <Button
                    color="lightDark"
                    label="Button"
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <Button
                    color="contrast"
                    label="Button"
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <Button
                    color="info"
                    label="Button"
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <Button
                    color="success"
                    label="Button"
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <Button
                    color="warning"
                    label="Button"
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <Button
                    color="danger"
                    label="Button"
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                </Buttons>

                <Divider />

                <Buttons>
                  <Button
                    color="lightDark"
                    label="Button"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <Button
                    color="contrast"
                    label="Button"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <Button
                    color="info"
                    label="Button"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <Button
                    color="success"
                    label="Button"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <Button
                    color="warning"
                    label="Button"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <Button
                    color="danger"
                    label="Button"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                </Buttons>

                <Divider />

                <Buttons>
                  <Button
                    color="lightDark"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <Button
                    color="contrast"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <Button
                    color="info"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <Button
                    color="success"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <Button
                    color="warning"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                  <Button
                    color="danger"
                    icon={mdiOpenInNew}
                    outline={values.outline}
                    small={values.small}
                    roundedFull={values.rounded}
                    disabled={values.disabled}
                  />
                </Buttons>
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
                <Divider />
                <Buttons>
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
                </Buttons>
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
              <Button icon={mdiReload} color="whiteDark" roundedFull />
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
