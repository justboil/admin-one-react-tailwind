import type { ReactNode } from "react";

type Props = {
  htmlFor?: string;
  children: ReactNode;
  className?: string;
};

const FieldLabel = ({ htmlFor, children, ...props }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`mb-2 block font-semibold ${htmlFor ? "cursor-pointer" : ""} ${props.className ?? ""}`}
    >
      <span className="line-clamp-1">{children}</span>
    </label>
  );
};

export default FieldLabel;
