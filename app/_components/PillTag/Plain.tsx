import React from "react";
import Icon from "../Icon";

type Props = {
  label?: string;
  icon?: string | null;
  className?: string;
  small?: boolean;
};

const PillTagPlain = ({ small = false, className = "", ...props }: Props) => {
  return (
    <div
      className={`inline-flex items-center leading-none capitalize ${
        small ? "text-xs" : "text-sm"
      } ${className}`}
    >
      {props.icon && (
        <Icon
          path={props.icon}
          h="h-4"
          w="w-4"
          className={small ? "mr-1" : "mr-2"}
          size={small ? 14 : null}
        />
      )}
      {props.label && <span>{props.label}</span>}
    </div>
  );
};

export default PillTagPlain;
