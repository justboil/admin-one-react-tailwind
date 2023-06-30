import React from 'react'

type Props = {
  navBar?: boolean
}

export default function Divider({ navBar = false }: Props) {
  const classAddon = navBar
    ? 'hidden lg:block lg:my-0.5 dark:border-slate-700'
    : 'my-6 -mx-6 dark:border-slate-800'

  return <hr className={`${classAddon} border-t border-gray-100`} />
}
