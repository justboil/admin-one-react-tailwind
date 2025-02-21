"use client";

import { mdiAsterisk, mdiFormTextboxPassword } from "@mdi/js";
import { Formik, Form, Field } from "formik";
import Button from "../../../_components/Button";
import Buttons from "../../../_components/Buttons";
import CardBox from "../../../_components/CardBox";
import CardBoxComponentBody from "../../../_components/CardBox/Component/Body";
import CardBoxComponentFooter from "../../../_components/CardBox/Component/Footer";
import Divider from "../../../_components/Divider";
import FormField from "../../../_components/FormField";

export default function PasswordForm() {
  return (
    <CardBox hasComponentLayout>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          newPasswordConfirmation: "",
        }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        <Form className="flex flex-col flex-1">
          <CardBoxComponentBody>
            <FormField
              label="Current password"
              help="Required. Your current password"
              labelFor="currentPassword"
              icon={mdiAsterisk}
            >
              {({ className }) => (
                <Field
                  name="currentPassword"
                  id="currentPassword"
                  type="password"
                  autoComplete="current-password"
                  className={className}
                />
              )}
            </FormField>

            <Divider />

            <FormField
              label="New password"
              help="Required. New password"
              labelFor="newPassword"
              icon={mdiFormTextboxPassword}
            >
              {({ className }) => (
                <Field
                  name="newPassword"
                  id="newPassword"
                  type="password"
                  autoComplete="new-password"
                  className={className}
                />
              )}
            </FormField>

            <FormField
              label="Confirm password"
              help="Required. New password one more time"
              labelFor="newPasswordConfirmation"
              icon={mdiFormTextboxPassword}
            >
              {({ className }) => (
                <Field
                  name="newPasswordConfirmation"
                  id="newPasswordConfirmation"
                  type="password"
                  autoComplete="new-password"
                  className={className}
                />
              )}
            </FormField>
          </CardBoxComponentBody>

          <CardBoxComponentFooter>
            <Buttons>
              <Button color="info" type="submit" label="Submit" isGrouped />
              <Button color="info" label="Options" outline isGrouped />
            </Buttons>
          </CardBoxComponentFooter>
        </Form>
      </Formik>
    </CardBox>
  );
}
