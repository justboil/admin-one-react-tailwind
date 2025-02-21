"use client";

import { mdiUpload, mdiAccount, mdiMail } from "@mdi/js";
import { Formik, Form, Field } from "formik";
import Button from "../../../_components/Button";
import Buttons from "../../../_components/Buttons";
import CardBox from "../../../_components/CardBox";
import CardBoxComponentBody from "../../../_components/CardBox/Component/Body";
import CardBoxComponentFooter from "../../../_components/CardBox/Component/Footer";
import FormField from "../../../_components/FormField";
import FormFilePicker from "../../../_components/FormField/FilePicker";
import { UserForm } from "../../../_interfaces";
import { useAppSelector } from "../../../_stores/hooks";

export default function ProfileForm() {
  const userName = useAppSelector((state) => state.main.userName);
  const userEmail = useAppSelector((state) => state.main.userEmail);

  const userForm: UserForm = {
    name: userName,
    email: userEmail,
  };

  return (
    <div className="flex flex-col">
      <CardBox className="mb-6">
        <FormField label="Avatar" help="Max 500kb">
          {() => (
            <FormFilePicker label="Upload" color="info" icon={mdiUpload} />
          )}
        </FormField>
      </CardBox>

      <CardBox className="flex-1" hasComponentLayout>
        <Formik
          initialValues={userForm}
          onSubmit={(values: UserForm) =>
            alert(JSON.stringify(values, null, 2))
          }
        >
          <Form className="flex flex-col flex-1">
            <CardBoxComponentBody>
              <FormField
                label="Name"
                help="Required. Your name"
                labelFor="name"
                icon={mdiAccount}
              >
                {({ className }) => (
                  <Field
                    name="name"
                    id="name"
                    placeholder="Name"
                    className={className}
                  />
                )}
              </FormField>
              <FormField
                label="E-mail"
                help="Required. Your e-mail"
                labelFor="email"
                icon={mdiMail}
              >
                {({ className }) => (
                  <Field
                    name="email"
                    id="email"
                    placeholder="E-mail"
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
    </div>
  );
}
