import { mdiAlertCircle, mdiReload } from "@mdi/js";
import Button from "../../_components/Button";
import Buttons from "../../_components/Buttons";
import CardBox from "../../_components/CardBox";
import CardBoxComponentEmpty from "../../_components/CardBox/Component/Empty";
import CardBoxComponentTitle from "../../_components/CardBox/Component/Title";
import SectionMain from "../../_components/Section/Main";
import SectionTitle from "../../_components/Section/Title";
import SectionTitleLineWithButton from "../../_components/Section/TitleLineWithButton";
import { getPageTitle } from "../../_lib/config";
import { Metadata } from "next";
import DarkModeExample from "./_components/DarkModeExample";
import ModalExamples from "./_components/ModalExamples";
import NotificationsExample from "./_components/NotificationsExample";
import ButtonsExample from "./_components/ButtonsExample";
import PillsExample from "./_components/PillsExample";

export const metadata: Metadata = {
  title: getPageTitle("UI"),
};

export default function UiPage() {
  const CardSamplesFooter = (
    <Buttons>
      <Button label="Confirm" color="info" isGrouped />
      <Button label="Cancel" color="info" outline isGrouped />
    </Buttons>
  );

  return (
    <>
      <SectionTitle first>Dark mode</SectionTitle>

      <DarkModeExample />

      <SectionTitle>Modal examples</SectionTitle>

      <ModalExamples />

      <NotificationsExample />

      <SectionTitle>Buttons</SectionTitle>

      <ButtonsExample />

      <SectionTitle>Pills</SectionTitle>

      <PillsExample />

      <SectionTitle>Cards</SectionTitle>

      <SectionMain>
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
          <CardBox footer={CardSamplesFooter}>
            <CardBoxComponentTitle title="With title & icon">
              <Button icon={mdiReload} color="whiteDark" roundedFull />
            </CardBoxComponentTitle>
            <div className="space-y-3">
              <p>Card with title, icon & footer</p>
            </div>
          </CardBox>

          <CardBox footer={CardSamplesFooter}>Just body & footer</CardBox>
        </div>

        <SectionTitleLineWithButton
          icon={mdiAlertCircle}
          title="Empty variation"
        />

        <CardBox>
          <CardBoxComponentEmpty />
        </CardBox>
      </SectionMain>
    </>
  );
}
