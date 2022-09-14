import { mdiGithub, mdiMonitorCellphone, mdiTableBorder, mdiTableOff } from "@mdi/js";
import Head from "next/head";
import React, { ReactElement } from "react";
import BaseButton from "../components/BaseButton";
import CardBox from "../components/CardBox";
import CardBoxComponentEmpty from "../components/CardBoxComponentEmpty";
import LayoutAuthenticated from "../components/layouts/Authenticated";
import NotificationBar from "../components/NotificationBar";
import SectionMain from "../components/SectionMain";
import SectionTitleLineWithButton from "../components/SectionTitleLineWithButton";
import TableSampleClients from "../components/TableSampleClients";
import { appTitle } from "../src/config";

const TablesPage = () => {
  return (
    <>
      <Head>
        <title>Tables - {appTitle}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiTableBorder} title="Tables" main>
          <BaseButton
            href="https://github.com/justboil/admin-one-vue-tailwind"
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

        <CardBox className="mb-6" has-table>
          <TableSampleClients />
        </CardBox>

        <SectionTitleLineWithButton icon={mdiTableOff} title="Empty variation" />

        <NotificationBar color="danger" icon={mdiTableOff}>
          <b>Empty card.</b> When there's nothing to show
        </NotificationBar>

        <CardBox>
          <CardBoxComponentEmpty />
        </CardBox>
      </SectionMain>
    </>
  )
}

TablesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default TablesPage;