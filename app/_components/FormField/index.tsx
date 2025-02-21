import { ReactNode } from "react";
import Icon from "../Icon";
import { FormFieldData } from "./interface";
import FieldLabel from "./FieldLabel";

type Props = {
  label?: string;
  labelFor?: string;
  help?: string;
  icon?: string;
  isBorderless?: boolean;
  isTransparent?: boolean;
  hasTextareaHeight?: boolean;
  children: (fieldData: FormFieldData) => ReactNode;
};

const FormField = ({ children, ...props }: Props) => {
  const fieldData: FormFieldData = {
    className: [
      "px-3 py-2 max-w-full border-gray-700 rounded w-full dark:placeholder-gray-400",
      "focus:ring focus:ring-blue-600 focus:border-blue-600 focus:outline-none",
      props.hasTextareaHeight ? "h-24" : "h-12",
      props.isBorderless ? "border-0" : "border",
      props.isTransparent ? "bg-transparent" : "bg-white dark:bg-slate-800",
      props.icon ? "pl-10" : "",
    ].join(" "),
  };

  return (
    <div className="mb-6 last:mb-0">
      {props.label && (
        <FieldLabel htmlFor={props.labelFor}>{props.label}</FieldLabel>
      )}
      <div className="relative">
        {children(fieldData)}
        {props.icon && (
          <Icon
            path={props.icon}
            w="w-10"
            h={props.hasTextareaHeight ? "h-full" : "h-12"}
            className="absolute top-0 left-0 z-10 pointer-events-none text-gray-500 dark:text-slate-400"
          />
        )}
      </div>
      {props.help && (
        <div className="text-xs text-gray-500 dark:text-slate-400 mt-1">
          {props.help}
        </div>
      )}
    </div>
  );
};

export default FormField;
