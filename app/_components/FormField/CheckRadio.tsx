import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  type: "checkbox" | "radio" | "switch";
  label?: string;
  className?: string;
  isGrouped?: boolean;
  disabled?: boolean;
};

const FormCheckRadio = (props: Props) => {
  return (
    <label
      className={`jb-custom-check ${props.type} ${props.className} ${props.disabled ? "disabled" : ""} ${props.isGrouped ? "mr-6 mb-3 last:mr-0" : ""}`}
    >
      {props.children}
      <span className="jb-check" />
      <span className="pl-2">{props.label}</span>
    </label>
  );
};

export default FormCheckRadio;
