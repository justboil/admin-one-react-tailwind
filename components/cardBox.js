import React from "react"
import CardBoxComponentBody from "./cardBoxComponentBody"
import CardBoxComponentFooter from "./cardBoxComponentFooter"

export default function CardBox({ rounded = 'rounded-2xl', flex='flex-col', className='', hasComponentLayout, hasTable, isForm, isHoverable, isModal, children, footer}) {
  const componentClass = [
    'bg-white flex',
    className,
    rounded,
    flex,
    isModal ? "dark:bg-slate-900" : "dark:bg-slate-900/70",
  ]

  if (isHoverable) {
    componentClass.push("hover:shadow-lg transition-shadow duration-500")
  }

  return React.createElement(
    isForm ? 'form' : 'div',
    { className: componentClass.join(" ") },
    hasComponentLayout
      ? children
      : (
          <>
            <CardBoxComponentBody noPadding={hasTable}>{children}</CardBoxComponentBody>
            { footer && <CardBoxComponentFooter>{footer}</CardBoxComponentFooter> }
          </>
        )
  )
}