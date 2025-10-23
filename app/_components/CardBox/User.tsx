"use client";

import { mdiCheckDecagram } from "@mdi/js";
import { Field, Form, Formik } from "formik";
import { useAppSelector } from "../../_stores/hooks";
import CardBox from ".";
import FormCheckRadio from "../FormField/CheckRadio";
import PillTag from "../PillTag";
import UserAvatarCurrentUser from "../../dashboard/_components/UserAvatar/CurrentUser";

type Props = {
  className?: string;
};

const CardBoxUser = ({ className }: Props) => {
  const userName = useAppSelector((state) => state.main.userName);

  return (
    <CardBox className={className}>
      <div className="flex flex-col items-center justify-around lg:flex-row lg:justify-center">
        <UserAvatarCurrentUser className="mb-6 lg:mx-12 lg:mb-0" />
        <div className="space-y-3 text-center md:text-left lg:mx-12">
          <div className="flex justify-center md:block">
            <Formik
              initialValues={{
                notifications: ["1"],
              }}
              onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            >
              <Form>
                <FormCheckRadio type="switch" label="Notifications">
                  <Field type="checkbox" name="notifications" value={"1"} />
                </FormCheckRadio>
              </Form>
            </Formik>
          </div>
          <h1 className="text-2xl">
            Howdy, <b>{userName}</b>!
          </h1>
          <p>
            Last login <b>12 mins ago</b> from <b>127.0.0.1</b>
          </p>
          <div className="flex justify-center md:block">
            <PillTag label="Verified" color="info" icon={mdiCheckDecagram} />
          </div>
        </div>
      </div>
    </CardBox>
  );
};

export default CardBoxUser;
