"use client";

import { mdiAccount, mdiBallotOutline, mdiGithub, mdiMail, mdiUpload } from "@mdi/js";
import { Field, Form, Formik } from "formik";
import Head from "next/head";
import Button from "../../_components/Button";
import Buttons from "../../_components/Buttons";
import Divider from "../../_components/Divider";
import CardBox from "../../_components/CardBox";
import FormCheckRadio from "../../_components/FormField/CheckRadio";
import FormCheckRadioGroup from "../../_components/FormField/CheckRadioGroup";
import FormField from "../../_components/FormField";
import FormFilePicker from "../../_components/FormField/FilePicker";
import SectionMain from "../../_components/Section/Main";
import SectionTitle from "../../_components/Section/Title";
import SectionTitleLineWithButton from "../../_components/Section/TitleLineWithButton";
import { getPageTitle } from "../../_lib/config";
import FieldLabel from "../../_components/FormField/FieldLabel";

export default function FormsPage() {
  return (
    <>
      <Head>
        <title>{getPageTitle("Forms")}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton icon={mdiBallotOutline} title="Formik forms example" main>
          <Button
            href="https://github.com/justboil/admin-one-react-tailwind"
            target="_blank"
            icon={mdiGithub}
            label="Star on GitHub"
            color="contrast"
            roundedFull
            small
          />
        </SectionTitleLineWithButton>

        <CardBox>
          <Formik
            initialValues={{
              fullname: "John Doe",
              email: "john.doe@example.com",
              phone: "",
              color: "green",
              textarea: "Hello",
            }}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          >
            <Form>
              <div className="mb-6 grid grid-cols-1 gap-3 last:mb-0 md:grid-cols-2">
                <div>
                  <FormField label="Name" labelFor="fullname" icon={mdiAccount}>
                    {({ className }) => (
                      <Field
                        name="fullname"
                        id="fullname"
                        placeholder="Full name"
                        className={className}
                      />
                    )}
                  </FormField>
                </div>
                <div>
                  <FormField label="Email" labelFor="email" icon={mdiMail}>
                    {({ className }) => (
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className={className}
                      />
                    )}
                  </FormField>
                </div>
              </div>

              <FormField
                label="With help line and labelFor"
                labelFor="phone"
                help="Help line comes here"
              >
                {({ className }) => (
                  <Field name="phone" placeholder="Phone" id="phone" className={className} />
                )}
              </FormField>

              <FormField label="Dropdown" labelFor="color">
                {({ className }) => (
                  <Field name="color" id="color" component="select" className={className}>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                  </Field>
                )}
              </FormField>

              <Divider />

              <FormField label="Textarea" labelFor="textarea" hasTextareaHeight>
                {({ className }) => (
                  <Field
                    name="textarea"
                    id="textarea"
                    as="textarea"
                    placeholder="Your text here"
                    className={className}
                  />
                )}
              </FormField>

              <Divider />

              <Buttons>
                <Button type="submit" color="info" label="Submit" isGrouped />
                <Button type="reset" color="info" outline label="Reset" isGrouped />
              </Buttons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>

      <SectionTitle>Custom elements</SectionTitle>

      <SectionMain>
        <CardBox>
          <Formik
            initialValues={{
              checkboxes: ["lorem"],
              switches: ["lorem"],
              radio: "lorem",
            }}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          >
            <Form>
              <FieldLabel>Checkbox</FieldLabel>
              <FormCheckRadioGroup>
                <FormCheckRadio type="checkbox" label="Lorem" isGrouped>
                  <Field type="checkbox" name="checkboxes" value="lorem" />
                </FormCheckRadio>
                <FormCheckRadio type="checkbox" label="Ipsum" isGrouped>
                  <Field type="checkbox" name="checkboxes" value="ipsum" />
                </FormCheckRadio>
                <FormCheckRadio type="checkbox" label="Dolore" isGrouped>
                  <Field type="checkbox" name="checkboxes" value="dolore" />
                </FormCheckRadio>
              </FormCheckRadioGroup>

              <Divider />

              <FieldLabel>Radio</FieldLabel>

              <FormCheckRadioGroup>
                <FormCheckRadio type="radio" label="Lorem" isGrouped>
                  <Field type="radio" name="radio" value="lorem" />
                </FormCheckRadio>
                <FormCheckRadio type="radio" label="Ipsum" isGrouped>
                  <Field type="radio" name="radio" value="ipsum" />
                </FormCheckRadio>
              </FormCheckRadioGroup>

              <Divider />

              <FieldLabel>Switch</FieldLabel>

              <FormCheckRadioGroup>
                <FormCheckRadio type="switch" label="Lorem" isGrouped>
                  <Field type="checkbox" name="switches" value="lorem" />
                </FormCheckRadio>
                <FormCheckRadio type="switch" label="Ipsum" isGrouped>
                  <Field type="checkbox" name="switches" value="ipsum" />
                </FormCheckRadio>
              </FormCheckRadioGroup>

              <Divider />

              <Buttons>
                <Button type="submit" color="info" label="Submit" isGrouped />
                <Button type="reset" color="info" outline label="Reset" isGrouped />
              </Buttons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>

      <SectionMain>
        <CardBox>
          <FormFilePicker label="Upload" color="info" icon={mdiUpload} />
        </CardBox>
      </SectionMain>
    </>
  );
}
