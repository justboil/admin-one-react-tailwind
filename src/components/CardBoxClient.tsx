import { mdiTrendingDown, mdiTrendingNeutral, mdiTrendingUp } from '@mdi/js'
import React from 'react'
import { Client } from '../interfaces'
import CardBox from './CardBox'
import PillTag from './PillTag'
import UserAvatar from './UserAvatar'

type Props = {
  client: Client
}

const CardBoxClient = (props: Props) => {
  const pillColor = () => {
    if (props.client.progress >= 60) {
      return 'success'
    }
    if (props.client.progress >= 40) {
      return 'warning'
    }

    return 'danger'
  }

  const pillIcon = {
    success: mdiTrendingUp,
    warning: mdiTrendingNeutral,
    danger: mdiTrendingDown,
  }[pillColor()]

  return (
    <CardBox className="mb-6 last:mb-0">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center justify-start mb-6 md:mb-0">
          <UserAvatar className="w-12 h-12 md:mr-6 mb-6 md:mb-0" username={props.client.name} />
          <div className="text-center md:text-left overflow-hidden">
            <h4 className="text-xl text-ellipsis">{props.client.name}</h4>
            <p className="text-gray-500 dark:text-slate-400">
              {props.client.created} @ {props.client.login}
            </p>
          </div>
        </div>

        <PillTag color={pillColor()} icon={pillIcon} label={`${props.client.progress}%`} />
      </div>
    </CardBox>
  )
}

export default CardBoxClient
