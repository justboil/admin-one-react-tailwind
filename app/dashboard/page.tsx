import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiGithub,
  mdiMonitorCellphone,
} from "@mdi/js";
import Button from "../_components/Button";
import SectionMain from "../_components/Section/Main";
import SectionTitleLineWithButton from "../_components/Section/TitleLineWithButton";
import CardBoxWidget from "../_components/CardBox/Widget";
import CardBoxTransaction from "../_components/CardBox/Transaction";
import { Client, Transaction } from "../_interfaces";
import CardBoxClient from "../_components/CardBox/Client";
import SectionBannerStarOnGitHub from "../_components/Section/Banner/StarOnGitHub";
import CardBox from "../_components/CardBox";
import NotificationBar from "../_components/NotificationBar";
import TableSampleClients from "./_components/Table/SampleClients";
import { getPageTitle } from "../_lib/config";
import { clients, transactions } from "./_lib/sampleData";
import ChartLineSampleComponentBlock from "./_components/ChartLineSample/ComponentBlock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: getPageTitle("Dashboard"),
};

export default function DashboardPage() {
  const clientsListed = clients.slice(0, 4);

  return (
    <SectionMain>
      <SectionTitleLineWithButton
        icon={mdiChartTimelineVariant}
        title="Overview"
        main
      >
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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
        <CardBoxWidget
          trendLabel="12%"
          trendType="up"
          trendColor="success"
          icon={mdiAccountMultiple}
          iconColor="success"
          number={512}
          label="Clients"
        />
        <CardBoxWidget
          trendLabel="16%"
          trendType="down"
          trendColor="danger"
          icon={mdiCartOutline}
          iconColor="info"
          number={7770}
          numberPrefix="$"
          label="Sales"
        />
        <CardBoxWidget
          trendLabel="Overflow"
          trendType="warning"
          trendColor="warning"
          icon={mdiChartTimelineVariant}
          iconColor="danger"
          number={256}
          numberSuffix="%"
          label="Performance"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col justify-between">
          {transactions.map((transaction: Transaction) => (
            <CardBoxTransaction
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </div>
        <div className="flex flex-col justify-between">
          {clientsListed.map((client: Client) => (
            <CardBoxClient key={client.id} client={client} />
          ))}
        </div>
      </div>

      <div className="my-6">
        <SectionBannerStarOnGitHub />
      </div>

      <ChartLineSampleComponentBlock />

      <SectionTitleLineWithButton icon={mdiAccountMultiple} title="Clients" />

      <NotificationBar color="info" icon={mdiMonitorCellphone}>
        <b>Responsive table.</b> Collapses on mobile
      </NotificationBar>

      <CardBox hasTable>
        <TableSampleClients clients={clients} />
      </CardBox>
    </SectionMain>
  );
}
