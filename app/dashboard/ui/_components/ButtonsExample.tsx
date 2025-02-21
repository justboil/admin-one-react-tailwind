"use client";

import { mdiOpenInNew } from "@mdi/js";
import { Formik, Field } from "formik";
import Button from "../../../_components/Button";
import Buttons from "../../../_components/Buttons";
import CardBox from "../../../_components/CardBox";
import Divider from "../../../_components/Divider";
import FormCheckRadio from "../../../_components/FormField/CheckRadio";
import FormCheckRadioGroup from "../../../_components/FormField/CheckRadioGroup";
import SectionMain from "../../../_components/Section/Main";

export default function ButtonsExample() {
  return (
    <SectionMain>
      <CardBox>
        <Formik
          initialValues={{
            outline: false,
            small: false,
            rounded: false,
            disabled: false,
          }}
          onSubmit={() => {}}
        >
          {({ values }) => (
            <>
              <FormCheckRadioGroup>
                <FormCheckRadio type="switch" label="Outline" isGrouped>
                  <Field type="checkbox" name="outline" />
                </FormCheckRadio>
                <FormCheckRadio type="switch" label="Small" isGrouped>
                  <Field type="checkbox" name="small" />
                </FormCheckRadio>
                <FormCheckRadio type="switch" label="Rounded" isGrouped>
                  <Field type="checkbox" name="rounded" />
                </FormCheckRadio>
                <FormCheckRadio type="switch" label="Disabled" isGrouped>
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
                  isGrouped
                />
                <Button
                  color="contrast"
                  label="Button"
                  outline={values.outline}
                  small={values.small}
                  roundedFull={values.rounded}
                  disabled={values.disabled}
                  isGrouped
                />
                <Button
                  color="info"
                  label="Button"
                  outline={values.outline}
                  small={values.small}
                  roundedFull={values.rounded}
                  disabled={values.disabled}
                  isGrouped
                />
                <Button
                  color="success"
                  label="Button"
                  outline={values.outline}
                  small={values.small}
                  roundedFull={values.rounded}
                  disabled={values.disabled}
                  isGrouped
                />
                <Button
                  color="warning"
                  label="Button"
                  outline={values.outline}
                  small={values.small}
                  roundedFull={values.rounded}
                  disabled={values.disabled}
                  isGrouped
                />
                <Button
                  color="danger"
                  label="Button"
                  outline={values.outline}
                  small={values.small}
                  roundedFull={values.rounded}
                  disabled={values.disabled}
                  isGrouped
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
                  isGrouped
                />
                <Button
                  color="contrast"
                  label="Button"
                  icon={mdiOpenInNew}
                  outline={values.outline}
                  small={values.small}
                  roundedFull={values.rounded}
                  disabled={values.disabled}
                  isGrouped
                />
                <Button
                  color="info"
                  label="Button"
                  icon={mdiOpenInNew}
                  outline={values.outline}
                  small={values.small}
                  roundedFull={values.rounded}
                  disabled={values.disabled}
                  isGrouped
                />
                <Button
                  color="success"
                  label="Button"
                  icon={mdiOpenInNew}
                  outline={values.outline}
                  small={values.small}
                  roundedFull={values.rounded}
                  disabled={values.disabled}
                  isGrouped
                />
                <Button
                  color="warning"
                  label="Button"
                  icon={mdiOpenInNew}
                  outline={values.outline}
                  small={values.small}
                  roundedFull={values.rounded}
                  disabled={values.disabled}
                  isGrouped
                />
                <Button
                  color="danger"
                  label="Button"
                  icon={mdiOpenInNew}
                  outline={values.outline}
                  small={values.small}
                  roundedFull={values.rounded}
                  disabled={values.disabled}
                  isGrouped
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
                  isGrouped
                />
                <Button
                  color="contrast"
                  icon={mdiOpenInNew}
                  outline={values.outline}
                  small={values.small}
                  roundedFull={values.rounded}
                  disabled={values.disabled}
                  isGrouped
                />
                <Button
                  color="info"
                  icon={mdiOpenInNew}
                  outline={values.outline}
                  small={values.small}
                  roundedFull={values.rounded}
                  disabled={values.disabled}
                  isGrouped
                />
                <Button
                  color="success"
                  icon={mdiOpenInNew}
                  outline={values.outline}
                  small={values.small}
                  roundedFull={values.rounded}
                  disabled={values.disabled}
                  isGrouped
                />
                <Button
                  color="warning"
                  icon={mdiOpenInNew}
                  outline={values.outline}
                  small={values.small}
                  roundedFull={values.rounded}
                  disabled={values.disabled}
                  isGrouped
                />
                <Button
                  color="danger"
                  icon={mdiOpenInNew}
                  outline={values.outline}
                  small={values.small}
                  roundedFull={values.rounded}
                  disabled={values.disabled}
                  isGrouped
                />
              </Buttons>
            </>
          )}
        </Formik>
      </CardBox>
    </SectionMain>
  );
}
