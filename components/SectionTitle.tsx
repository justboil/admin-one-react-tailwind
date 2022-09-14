import React, { ReactNode } from 'react'

type Props = {
  custom?: boolean
  first?: boolean
  last?: boolean
  children: ReactNode
}

const SectionTitle = ({ custom = false, first = false, last = false, children }: Props) => {
  let classAddon = '-my-6'

  if (first) {
    classAddon = '-mb-6'
  } else if (last) {
    classAddon = '-mt-6'
  }

  return (
    <section className={`py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center ${classAddon}`}>
      {custom && children}
      {!custom && <h1 className="text-2xl text-gray-500 dark:text-slate-400">{children}</h1>}
    </section>
  )
}

export default SectionTitle
