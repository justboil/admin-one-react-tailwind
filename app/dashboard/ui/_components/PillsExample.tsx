"use client";

import { mdiTrendingUp } from "@mdi/js";
import { Formik, Field } from "formik";
import Buttons from "../../../_components/Buttons";
import CardBox from "../../../_components/CardBox";
import Divider from "../../../_components/Divider";
import FormCheckRadio from "../../../_components/FormField/CheckRadio";
import FormCheckRadioGroup from "../../../_components/FormField/CheckRadioGroup";
import PillTag from "../../../_components/PillTag";
import SectionMain from "../../../_components/Section/Main";

export default function PillsExample() {
  return (
    <SectionMain>
      <CardBox>
        <Formik
          initialValues={{ outline: false, small: false, icon: true }}
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
                <FormCheckRadio type="switch" label="Icon" isGrouped>
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
                  isGrouped
                />
                <PillTag
                  color="info"
                  label="Info"
                  icon={values.icon ? mdiTrendingUp : null}
                  outline={values.outline}
                  small={values.small}
                  isGrouped
                />
                <PillTag
                  color="success"
                  label="Info"
                  icon={values.icon ? mdiTrendingUp : null}
                  outline={values.outline}
                  small={values.small}
                  isGrouped
                />
                <PillTag
                  color="warning"
                  label="Info"
                  icon={values.icon ? mdiTrendingUp : null}
                  outline={values.outline}
                  small={values.small}
                  isGrouped
                />
                <PillTag
                  color="danger"
                  label="Info"
                  icon={values.icon ? mdiTrendingUp : null}
                  outline={values.outline}
                  small={values.small}
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
