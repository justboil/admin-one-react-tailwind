import { ReactNode } from "react";

type Props = {
  isColumn?: boolean;
  children: ReactNode;
};

const FormCheckRadioGroup = (props: Props) => {
  return (
    <div className={`-mb-3 flex flex-wrap justify-start ${props.isColumn ? "flex-col" : ""}`}>
      {props.children}
    </div>
  );
};

export default FormCheckRadioGroup;
