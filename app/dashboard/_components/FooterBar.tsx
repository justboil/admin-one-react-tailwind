import React, { ReactNode } from "react";
import { containerMaxW } from "../../_lib/config";
import JustboilLogo from "../../_components/JustboilLogo";

type Props = {
  children: ReactNode;
};

export default function FooterBar({ children }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className={`px-6 py-2 ${containerMaxW}`}>
      <div className="block items-center justify-between md:flex">
        <div className="mb-6 text-center md:mb-0 md:text-left">
          <b>
            &copy;{year},{` `}
            <a href="https://justboil.me/" rel="noreferrer" target="_blank">
              JustBoil.me
            </a>
            .
          </b>
          {` `}
          {children}
        </div>
        <div className="md:py-2">
          <a href="https://justboil.me" rel="noreferrer" target="_blank">
            <JustboilLogo className="mx-auto h-8 w-auto md:h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
