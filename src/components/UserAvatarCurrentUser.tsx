import React, { ReactNode } from 'react'
import { useAppSelector } from '../stores/hooks'
import UserAvatar from './UserAvatar'

type Props = {
  className?: string
  children?: ReactNode
}

export default function UserAvatarCurrentUser({ className = '', children }: Props) {
  const userName = useAppSelector((state) => state.main.userName)
  const userAvatar = useAppSelector((state) => state.main.userAvatar)

  return (
    <UserAvatar username={userName} avatar={userAvatar} className={className}>
      {children}
    </UserAvatar>
  )
}
