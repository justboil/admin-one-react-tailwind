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
      <CardBox className="md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto">
        <div className="text-center py-24 lg:py-12 text-gray-500 dark:text-slate-400">
          <Button
            label="Toggle"
            color="contrast"
            onClick={() => dispatch(setDarkMode(null))}
          />
        </div>
      </CardBox>
    </SectionMain>
  );
}
