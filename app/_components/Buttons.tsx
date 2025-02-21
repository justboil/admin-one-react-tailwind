import type { ReactNode } from "react";

type Props = {
  type?: string;
  mb?: string;
  noWrap?: boolean;
  classAddon?: string;
  children: ReactNode;
  className?: string;
};

const Buttons = ({
  type = "justify-start",
  mb = "-mb-3",
  noWrap = false,
  children,
  className,
}: Props) => {
  return (
    <div
      className={`flex items-center ${type} ${className} ${mb} ${
        noWrap ? "flex-nowrap" : "flex-wrap"
      }`}
    >
      {children}
    </div>
  );
};

export default Buttons;
