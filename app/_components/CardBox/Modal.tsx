import { mdiClose } from "@mdi/js";
import { ReactNode } from "react";
import type { ColorButtonKey } from "../../_interfaces";
import Button from "../Button";
import Buttons from "../Buttons";
import CardBox from ".";
import CardBoxComponentTitle from "./Component/Title";
import OverlayLayer from "../OverlayLayer";

type Props = {
  title: string;
  buttonColor: ColorButtonKey;
  buttonLabel: string;
  isActive: boolean;
  children: ReactNode;
  onConfirm: () => void;
  onCancel?: () => void;
};

const CardBoxModal = ({
  title,
  buttonColor,
  buttonLabel,
  isActive,
  children,
  onConfirm,
  onCancel,
}: Props) => {
  if (!isActive) {
    return null;
  }

  const footer = (
    <Buttons>
      <Button label={buttonLabel} color={buttonColor} onClick={onConfirm} isGrouped />
      {!!onCancel && (
        <Button label="Cancel" color={buttonColor} outline onClick={onCancel} isGrouped />
      )}
    </Buttons>
  );

  return (
    <OverlayLayer onClick={onCancel} className={onCancel ? "cursor-pointer" : ""}>
      <CardBox
        className={`z-50 max-h-[calc(100dvh-(--spacing(40)))] w-11/12 animate-fade-in shadow-lg transition-transform md:w-3/5 lg:w-2/5 xl:w-4/12`}
        isModal
        footer={footer}
      >
        <CardBoxComponentTitle title={title}>
          {!!onCancel && (
            <Button icon={mdiClose} color="whiteDark" onClick={onCancel} small roundedFull />
          )}
        </CardBoxComponentTitle>

        <div className="space-y-3">{children}</div>
      </CardBox>
    </OverlayLayer>
  );
};

export default CardBoxModal;
