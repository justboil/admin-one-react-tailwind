import React from 'react'
import type { ReactElement } from 'react'
import Head from 'next/head'
import Button from '../components/Button'
import CardBox from '../components/CardBox'
import SectionFullScreen from '../components/Section/FullScreen'
import LayoutGuest from '../layouts/Guest'
import { Field, Form, Formik } from 'formik'
import FormField from '../components/FormField'
import FormCheckRadio from '../components/FormField/CheckRadio'
import Divider from '../components/Divider'
import Buttons from '../components/Buttons'
import { useRouter } from 'next/router'
import { getPageTitle } from '../config'

type LoginForm = {
  login: string
  password: string
  remember: boolean
}

const LoginPage = () => {
  const router = useRouter()

  const handleSubmit = (formValues: LoginForm) => {
    router.push('/dashboard')
    console.log('Form values', formValues)
  }

  const initialValues: LoginForm = {
    login: 'john.doe',
    password: 'bG1sL9eQ1uD2sK3b',
    remember: true,
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Login')}</title>
      </Head>

      <SectionFullScreen bg="purplePink">
        <CardBox className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <FormField label="Login" help="Please enter your login">
                {({className}) => <Field name="login" className={className} />}
              </FormField>

              <FormField label="Password" help="Please enter your password">
                {({className}) => <Field name="password" type="password" className={className} />}
              </FormField>

              <FormCheckRadio type="checkbox" label="Remember">
                <Field type="checkbox" name="remember" />
              </FormCheckRadio>

              <Divider />

              <Buttons>
                <Button type="submit" label="Login" color="info" isGrouped />
                <Button href="/dashboard" label="Home" color="info" outline isGrouped />
              </Buttons>
            </Form>
          </Formik>
        </CardBox>
      </SectionFullScreen>
    </>
  )
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>
}

export default LoginPage
