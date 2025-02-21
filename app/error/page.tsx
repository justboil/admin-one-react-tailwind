import React from "react";
import Button from "../_components/Button";
import CardBox from "../_components/CardBox";
import SectionFullScreen from "../_components/Section/FullScreen";
import { getPageTitle } from "../_lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: getPageTitle("Error"),
};

export default function ErrorPage() {
  return (
    <SectionFullScreen bg="pinkRed">
      <CardBox
        className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl"
        footer={<Button href="/dashboard" label="Done" color="danger" />}
      >
        <div className="space-y-3">
          <h1 className="text-2xl">Unhandled exception</h1>

          <p>An Error Occurred</p>
        </div>
      </CardBox>
    </SectionFullScreen>
  );
}
