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
    <div
      className={`flex min-h-screen items-center justify-center ${gradientBgPurplePink}`}
    >
      <Suspense fallback={null}>
        <OnVisit />
      </Suspense>
      <SectionMain>
        <h1 className="text-4xl md:text-5xl text-center text-white font-bold mt-12 mb-3 lg:mt-0">
          Pick a style&hellip;
        </h1>
        <h2 className="text-xl md:text-xl text-center text-white mb-12">
          Style switching with a single{" "}
          <code className="px-1.5 py-0.5 rounded-sm bg-white/20">
            action()
          </code>
        </h2>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 px-6 max-w-6xl mx-auto">
          {styles.map((style) => (
            <StylePickBox key={style} style={style} />
          ))}
        </div>
      </SectionMain>
    </div>
  );
}
