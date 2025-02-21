"use client";

import {
  mdiInformation,
  mdiCheckCircle,
  mdiAlert,
  mdiAlertCircle,
  mdiContrastCircle,
} from "@mdi/js";
import { Formik, Field } from "formik";
import Button from "../../../_components/Button";
import FormCheckRadio from "../../../_components/FormField/CheckRadio";
import NotificationBar from "../../../_components/NotificationBar";
import SectionMain from "../../../_components/Section/Main";
import SectionTitle from "../../../_components/Section/Title";

export default function NotificationsExample() {
  return (
    <Formik initialValues={{ outline: false }} onSubmit={() => {}}>
      {({ values }) => (
        <>
          <SectionTitle custom>
            <h1 className="text-2xl text-gray-500 dark:text-slate-400">
              Notifications
            </h1>
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
                  color={values.outline ? "info" : "white"}
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
                  color={values.outline ? "success" : "white"}
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
                  color={values.outline ? "warning" : "white"}
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
                  color={values.outline ? "danger" : "white"}
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

            <NotificationBar
              color="contrast"
              icon={mdiContrastCircle}
              outline={values.outline}
            >
              <b>Contrast</b>. NotificationBar
            </NotificationBar>
          </SectionMain>
        </>
      )}
    </Formik>
  );
}
