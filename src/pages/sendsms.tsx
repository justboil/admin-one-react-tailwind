import { mdiAccount, mdiBallotOutline, mdiGithub, mdiMail, mdiUpload } from '@mdi/js'
import { Field, Form, Formik } from 'formik'
import Head from 'next/head'
import { ReactElement } from 'react'
import Button from '../components/Button'
import Buttons from '../components/Buttons'
import Divider from '../components/Divider'
import CardBox from '../components/CardBox'
import FormCheckRadio from '../components/Form/CheckRadio'
import FormCheckRadioGroup from '../components/Form/CheckRadioGroup'
import FormField from '../components/Form/Field'
import FormFilePicker from '../components/Form/FilePicker'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitle from '../components/Section/Title'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'

const FormsPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Send Bulk Sms')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiBallotOutline}
          title="Send Bulk Sms"
          main
        ></SectionTitleLineWithButton>

        <CardBox>
          <Formik
            initialValues={{
              phone: '',
              color: 'green',
              textarea: '',
            }}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          >
            <Form>
              <FormField label="SmsId" icons={[mdiAccount, mdiMail]}>
                <Field name="smsid" placeholder="smsid" />
              </FormField>
              <FormField label="Number(s)" hasTextareaHeight>
                <Field as="textarea" name="phone" placeholder="Phone" id="phone" />
              </FormField>

              <Divider />

              <FormField label="Message" hasTextareaHeight>
                <Field name="message" as="textarea" placeholder="Your message here" />
              </FormField>

              <Divider />

              <Buttons>
                <Button type="submit" color="info" label="Submit" />
                <Button type="reset" color="info" outline label="Reset" />
              </Buttons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  )
}

FormsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default FormsPage
