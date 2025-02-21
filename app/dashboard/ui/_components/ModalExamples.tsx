"use client";

import { mdiClose } from "@mdi/js";
import { useState } from "react";
import Button from "../../../_components/Button";
import Buttons from "../../../_components/Buttons";
import CardBox from "../../../_components/CardBox";
import CardBoxComponentTitle from "../../../_components/CardBox/Component/Title";
import CardBoxModal from "../../../_components/CardBox/Modal";
import SectionMain from "../../../_components/Section/Main";

export default function ModalExamples() {
  const modalSampleCardClassName =
    "cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto";

  const modalSampleContents = (
    <>
      <p>
        Lorem ipsum dolor sit amet <b>adipiscing elit</b>
      </p>
      <p>This is sample modal</p>
    </>
  );

  const modalFooterInfo = (
    <Buttons>
      <Button label="Confirm" color="info" isGrouped />
      <Button label="Cancel" color="info" outline isGrouped />
    </Buttons>
  );

  const modalFooterDanger = (
    <Buttons>
      <Button label="Done" color="danger" isGrouped />
    </Buttons>
  );

  const modalFooterSuccess = (
    <Buttons>
      <Button label="Done" color="success" isGrouped />
    </Buttons>
  );

  const handleModalAction = () => {
    setIsModalInfoActive(false);
    setIsModalDangerActive(false);
    setIsModalSuccessActive(false);
  };

  const [isModalInfoActive, setIsModalInfoActive] = useState(false);
  const [isModalDangerActive, setIsModalDangerActive] = useState(false);
  const [isModalSuccessActive, setIsModalSuccessActive] = useState(false);

  return (
    <>
      <CardBoxModal
        title="Please confirm action"
        buttonColor="info"
        buttonLabel="Confirm"
        isActive={isModalInfoActive}
        onConfirm={handleModalAction}
        onCancel={handleModalAction}
      >
        {modalSampleContents}
      </CardBoxModal>

      <CardBoxModal
        title="Unhandled exception"
        buttonColor="danger"
        buttonLabel="Done"
        isActive={isModalDangerActive}
        onConfirm={handleModalAction}
      >
        {modalSampleContents}
      </CardBoxModal>

      <CardBoxModal
        title="Success"
        buttonColor="success"
        buttonLabel="Done"
        isActive={isModalSuccessActive}
        onConfirm={handleModalAction}
      >
        {modalSampleContents}
      </CardBoxModal>

      <SectionMain>
        <div className="space-y-12">
          <CardBox
            className={modalSampleCardClassName}
            footer={modalFooterInfo}
            onClick={() => setIsModalInfoActive(true)}
            isHoverable
          >
            <CardBoxComponentTitle title="Please confirm action">
              <Button icon={mdiClose} color="whiteDark" small roundedFull />
            </CardBoxComponentTitle>
            <div className="space-y-3">
              <p>Click to see in action</p>
            </div>
          </CardBox>

          <CardBox
            className={modalSampleCardClassName}
            footer={modalFooterDanger}
            onClick={() => setIsModalDangerActive(true)}
            isHoverable
          >
            <CardBoxComponentTitle title="Unhandled exception" />

            <div className="space-y-3">
              <p>Click to see in action</p>
            </div>
          </CardBox>

          <CardBox
            className={modalSampleCardClassName}
            footer={modalFooterSuccess}
            onClick={() => setIsModalSuccessActive(true)}
            isHoverable
          >
            <CardBoxComponentTitle title="Success" />

            <div className="space-y-3">
              <p>Click to see in action</p>
            </div>
          </CardBox>
        </div>
      </SectionMain>
    </>
  );
}
