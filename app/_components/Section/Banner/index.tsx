import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

const SectionBanner = ({ className = "", children }: Props) => {
  return (
    <div className={`${className} rounded-2xl px-6 py-12 text-center lg:px-12`}>{children}</div>
  );
};

export default SectionBanner;
