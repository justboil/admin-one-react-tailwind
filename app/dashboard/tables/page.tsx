import {
  mdiGithub,
  mdiMonitorCellphone,
  mdiTableBorder,
  mdiTableOff,
} from "@mdi/js";
import Button from "../../_components/Button";
import CardBox from "../../_components/CardBox";
import CardBoxComponentEmpty from "../../_components/CardBox/Component/Empty";
import NotificationBar from "../../_components/NotificationBar";
import SectionMain from "../../_components/Section/Main";
import SectionTitleLineWithButton from "../../_components/Section/TitleLineWithButton";
import TableSampleClients from "../_components/Table/SampleClients";
import { getPageTitle } from "../../_lib/config";
import { clients } from "../_lib/sampleData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: getPageTitle("Tables"),
};

export default function TablesPage() {
  return (
    <SectionMain>
      <SectionTitleLineWithButton icon={mdiTableBorder} title="Tables" main>
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

      <NotificationBar color="info" icon={mdiMonitorCellphone}>
        <b>Responsive table.</b> Collapses on mobile
      </NotificationBar>

      <CardBox className="mb-6" hasTable>
        <TableSampleClients clients={clients} />
      </CardBox>

      <SectionTitleLineWithButton icon={mdiTableOff} title="Empty variation" />

      <NotificationBar color="danger" icon={mdiTableOff}>
        <b>Empty card.</b> When there&apos;s nothing to show
      </NotificationBar>

      <CardBox>
        <CardBoxComponentEmpty />
      </CardBox>
    </SectionMain>
  );
}
