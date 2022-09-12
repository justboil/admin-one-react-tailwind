import React, { ReactNode } from 'react'
import Image from 'next/image'

type Props = {
  username: string,
  avatar?: string|null,
  api?: string,
  className?: string,
  children?: ReactNode
}

export default function UserAvatar({ username, avatar=null, api = 'avataaars', className='', children }: Props) {
  const avatarImage =
    avatar ?? `https://avatars.dicebear.com/api/${api}/${username.replace(/[^a-z0-9]+/i, '-')}.svg`

  return (
    <div className={`bg-gray-100 dark:bg-slate-800 ${className}`}>
      <Image
        src={avatarImage}
        alt={username}
        width={24}
        height={24}
        className={`rounded-full h-auto w-full max-w-full ${className}`}
      />
      {children}
    </div>
  )
}
