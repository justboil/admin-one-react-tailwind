"use client";

import Button from "../../../_components/Button";
import CardBox from "../../../_components/CardBox";
import SectionMain from "../../../_components/Section/Main";
import { setDarkMode } from "../../../_stores/darkModeSlice";
import { useAppDispatch } from "../../../_stores/hooks";

export default function DarkModeExample() {
  const dispatch = useAppDispatch();

  return (
    <SectionMain>
      <CardBox className="shadow-2xl md:mx-auto md:w-7/12 lg:w-5/12 xl:w-4/12">
        <div className="py-24 text-center text-gray-500 lg:py-12 dark:text-slate-400">
          <Button label="Toggle" color="contrast" onClick={() => dispatch(setDarkMode(null))} />
        </div>
      </CardBox>
    </SectionMain>
  );
}
