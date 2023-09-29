import React, { ReactNode } from 'react'
import { useAppSelector } from '../../stores/hooks'
import UserAvatar from '.'

type Props = {
  className?: string
  children?: ReactNode
}

export default function UserAvatarCurrentUser({ className = '', children }: Props) {
  const userEmail = useAppSelector((state) => state.main.userEmail)

  return (
    <UserAvatar username={userEmail} className={className}>
      {children}
    </UserAvatar>
  )
}
