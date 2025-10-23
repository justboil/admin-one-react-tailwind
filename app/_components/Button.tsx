import React from "react";
import Link from "next/link";
import { getButtonColor } from "../_lib/colors";
import Icon from "./Icon";
import type { ColorButtonKey } from "../_interfaces";

type Props = {
  label?: string | null;
  icon?: string;
  iconSize?: string | number;
  href?: string;
  target?: string;
  type?: string;
  color?: ColorButtonKey;
  className?: string;
  asAnchor?: boolean;
  small?: boolean;
  outline?: boolean;
  active?: boolean;
  disabled?: boolean;
  roundedFull?: boolean;
  isGrouped?: boolean;
  onClick?: (e: React.MouseEvent) => void;
};

export default function Button({
  label,
  icon,
  iconSize,
  href,
  target,
  type,
  color = "white",
  className = "",
  asAnchor = false,
  small = false,
  outline = false,
  active = false,
  disabled = false,
  roundedFull = false,
  onClick,
  ...props
}: Props) {
  const componentClass = [
    "inline-flex",
    "justify-center",
    "items-center",
    "whitespace-nowrap",
    "focus:outline-hidden",
    "transition-colors",
    "focus:ring-3",
    "duration-150",
    "border",
    disabled ? "cursor-not-allowed" : "cursor-pointer",
    roundedFull ? "rounded-full" : "rounded-sm",
    getButtonColor(color, outline, !disabled, active),
    className,
  ];

  if (props.isGrouped) {
    componentClass.push("mr-3 last:mr-0 mb-3");
  }

  if (!label && icon) {
    componentClass.push("p-1");
  } else if (small) {
    componentClass.push("text-sm", roundedFull ? "px-3 py-1" : "p-1");
  } else {
    componentClass.push("py-2", roundedFull ? "px-6" : "px-3");
  }

  if (disabled) {
    componentClass.push(outline ? "opacity-50" : "opacity-70");
  }

  const componentClassString = componentClass.join(" ");

  const componentChildren = (
    <>
      {icon && <Icon path={icon} size={iconSize} />}
      {label && <span className={small && icon ? "px-1" : "px-2"}>{label}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} target={target} className={componentClassString}>
        {componentChildren}
      </Link>
    );
  }

  return React.createElement(
    asAnchor ? "a" : "button",
    {
      className: componentClassString,
      type: type ?? "button",
      target,
      disabled,
      onClick,
    },
    componentChildren,
  );
}
