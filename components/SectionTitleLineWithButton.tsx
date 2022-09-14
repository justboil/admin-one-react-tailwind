import { mdiCog } from '@mdi/js'
import React, { Children, ReactNode } from 'react'
import BaseButton from './BaseButton'
import BaseIcon from './BaseIcon'
import IconRounded from './IconRounded'

type Props = {
  icon: string
  title: string
  main?: boolean
  children?: ReactNode
}

export default function SectionTitleLineWithButton({ icon, title, main = false, children }: Props) {
  const hasChildren = !!Children.count(children)

  return (
    <section className={`${main ? '' : 'pt-6'} mb-6 flex items-center justify-between`}>
      <div className="flex items-center justify-start">
        {icon && main && <IconRounded icon={icon} color="light" className="mr-3" bg />}
        {icon && !main && <BaseIcon path={icon} className="mr-2" size="20" />}
        <h1 className={`leading-tight ${main ? 'text-3xl' : 'text-2xl'}`}>{title}</h1>
      </div>
      {children}
      {!hasChildren && <BaseButton icon={mdiCog} color="whiteDark" />}
    </section>
  )
}
