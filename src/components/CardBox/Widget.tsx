import { mdiCog } from '@mdi/js'
import React from 'react'
import { ColorKey, TrendType } from '../../interfaces'
import { colorsText } from '../../colors'
import Button from '../Button'
import Icon from '../Icon'
import CardBox from '.'
import NumberDynamic from '../NumberDynamic'
import PillTagTrend from '../PillTag/Trend'

type Props = {
  number: number
  numberPrefix?: string
  numberSuffix?: string
  icon: string
  iconColor: ColorKey
  label: string
  trendLabel?: string
  trendType?: TrendType
  trendColor?: ColorKey
}

const CardBoxWidget = (props: Props) => {
  return (
    <CardBox>
      {props.trendLabel && props.trendType && props.trendColor && (
        <div className="flex items-center justify-between mb-3">
          <PillTagTrend
            label={props.trendLabel}
            type={props.trendType}
            color={props.trendColor}
            small
          />
          <Button icon={mdiCog} color="lightDark" small />
        </div>
      )}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg leading-tight text-gray-500 dark:text-slate-400">{props.label}</h3>
          <h1 className="text-3xl leading-tight font-semibold">
            <NumberDynamic
              value={props.number}
              prefix={props.numberPrefix}
              suffix={props.numberSuffix}
            />
          </h1>
        </div>
        {props.icon && (
          <Icon path={props.icon} size="48" w="" h="h-16" className={colorsText[props.iconColor]} />
        )}
      </div>
    </CardBox>
  )
}

export default CardBoxWidget
