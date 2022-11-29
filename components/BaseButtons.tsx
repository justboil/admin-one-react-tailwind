import { Children, cloneElement, ReactElement } from 'react'
import type { ReactNode } from 'react'

type Props = {
  type?: string
  mb?: string
  noWrap?: boolean
  classAddon?: string
  children: ReactNode
}

const BaseButtons = ({
  type = 'justify-start',
  mb = '-mb-3',
  classAddon = 'mr-3 last:mr-0 mb-3',
  noWrap = false,
  children,
}: Props) => {
  return (
    <div className={`flex items-center ${type} ${mb} ${noWrap ? 'flex-nowrap' : 'flex-wrap'}`}>
      {Children.map(children, (child: ReactElement) =>
        child ? cloneElement(child, { className: `${classAddon} ${child.props.className}` }) : null
      )}
    </div>
  )
}

export default BaseButtons
