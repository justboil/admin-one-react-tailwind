import React from "react";

export default function BaseButtons({noWrap=false, type='justify-start', mb='-mb-3', children}) {
  const parentClass = [
    "flex",
    "items-center",
    type,
    noWrap ? "flex-nowrap" : "flex-wrap",
    mb
  ];

  return <div className={parentClass}>{children}</div>
}