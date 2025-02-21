"use client";

import { mdiChartPie, mdiReload } from "@mdi/js";
import { useState } from "react";
import ChartLineSample from ".";
import Button from "../../../_components/Button";
import CardBox from "../../../_components/CardBox";
import SectionTitleLineWithButton from "../../../_components/Section/TitleLineWithButton";
import { sampleChartData } from "./config";

export default function ChartLineSampleComponentBlock() {
  const [chartData, setChartData] = useState(sampleChartData());

  const fillChartData = (e: React.MouseEvent) => {
    e.preventDefault();

    setChartData(sampleChartData());
  };

  return (
    <>
      <SectionTitleLineWithButton icon={mdiChartPie} title="Trends overview">
        <Button icon={mdiReload} color="whiteDark" onClick={fillChartData} />
      </SectionTitleLineWithButton>

      <CardBox className="mb-6">
        {chartData && <ChartLineSample data={chartData} />}
      </CardBox>
    </>
  );
}
