import React from 'react';
import Link from 'next/link'
import { getButtonColor } from '../src/colors';
import BaseIcon from './baseIcon';

export default function BaseButton({label, icon, iconSize, href, target, type=null, color, asAnchor=false, className, small=false, outline=false, active=false, disabled=false, roundedFull=false}) {
  const componentClass = [
    "inline-flex",
    "cursor-pointer",
    "justify-center",
    "items-center",
    "whitespace-nowrap",
    "focus:outline-none",
    "transition-colors",
    "focus:ring",
    "duration-150",
    "border",
    roundedFull ? "rounded-full" : "rounded",
    getButtonColor(color, outline, !disabled, active),
    className
  ];

  if (!label && icon) {
    componentClass.push("p-1");
  } else if (small) {
    componentClass.push("text-sm", roundedFull ? "px-3 py-1" : "p-1");
  } else {
    componentClass.push("py-2", roundedFull ? "px-6" : "px-3");
  }

  if (disabled) {
    componentClass.push(
      "cursor-not-allowed",
      outline ? "opacity-50" : "opacity-70"
    );
  }

  const componentClassString = componentClass.join(' ')

  const componentChildren = <>
    { icon && <BaseIcon path={icon} size={iconSize} /> }
    { label && <span className={small && icon ? 'px-1' : 'px-2'}>{label}</span> }
  </>

  if (href) {
    return (<Link href={href} target={target} disabled={disabled} passHref>
      <a className={componentClassString} disabled={disabled}>
        {componentChildren}
      </a>
    </Link>)
  }

  return React.createElement(
    asAnchor ? 'a' : 'button', 
    { className: componentClassString, type: type ?? 'button', target, disabled },
    componentChildren
  )
}