import SectionMain from "./_components/Section/Main";
import { gradientBgPurplePink } from "./_lib/colors";
import { appTitle } from "./_lib/config";
import { Metadata } from "next";
import StylePickBox from "./_components/StyleSelect/StylePickBox";
import { Suspense } from "react";
import { OnVisit } from "./_components/StyleSelect/OnVisit";

export const metadata: Metadata = {
  title: appTitle,
};

export default function StyleSelectPage() {
  const styles = ["white", "basic"];

  return (
    <div className={`flex min-h-screen items-center justify-center ${gradientBgPurplePink}`}>
      <Suspense fallback={null}>
        <OnVisit />
      </Suspense>
      <SectionMain>
        <h1 className="mt-12 mb-3 text-center text-4xl font-bold text-white md:text-5xl lg:mt-0">
          Pick a style&hellip;
        </h1>
        <h2 className="mb-12 text-center text-xl text-white md:text-xl">
          Style switching with a single{" "}
          <code className="rounded-sm bg-white/20 px-1.5 py-0.5">action()</code>
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 lg:grid-cols-2">
          {styles.map((style) => (
            <StylePickBox key={style} style={style} />
          ))}
        </div>
      </SectionMain>
    </div>
  );
}
