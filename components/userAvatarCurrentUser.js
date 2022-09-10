import { useSelector } from 'react-redux'
import UserAvatar from './userAvatar'

export default function UserAvatarCurrentUser({ className, children }) {
  const userName = useSelector((state) => state.main.userName)
  const userAvatar = useSelector((state) => state.main.UserAvatar)

  return (
    <UserAvatar username={userName} avatar={userAvatar} className={className}>
      {children}
    </UserAvatar>
  )
}
