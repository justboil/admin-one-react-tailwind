import { mdiCashMinus, mdiCashPlus, mdiCreditCard, mdiReceipt } from '@mdi/js'
import React from 'react'
import { Transaction } from '../interfaces'
import BaseLevel from './BaseLevel'
import CardBox from './CardBox'
import IconRounded from './IconRounded'
import PillTag from './PillTag'

type Props = {
  transaction: Transaction
}

const CardBoxTransaction = (props: Props) => {
  const icon = {
    withdraw: mdiCashMinus,
    deposit: mdiCashPlus,
    invoice: mdiReceipt,
    payment: mdiCreditCard,
  }[props.transaction.type]

  const typeColor = () => {
    switch (props.transaction.type) {
      case 'withdraw':
        return 'danger'
      case 'deposit':
        return 'success'
      case 'invoice':
        return 'warning'
      case 'payment':
        return 'info'
    }
  }

  return (
    <CardBox className="mb-6 last:mb-0">
      <BaseLevel>
        <BaseLevel type="justify-start">
          <IconRounded icon={icon} color={typeColor()} className="md:mr-6" />
          <div className="text-center space-y-1 md:text-left md:mr-6">
            <h4 className="text-xl">{props.transaction.amount}</h4>
            <p className="text-gray-500 dark:text-slate-400">
              <b>{props.transaction.date}</b> via {props.transaction.business}
            </p>
          </div>
        </BaseLevel>
        <div className="text-center md:text-right space-y-2">
          <p className="text-sm text-gray-500">{props.transaction.name}</p>
          <div>
            <PillTag color={typeColor()} label={props.transaction.type} small />
          </div>
        </div>
      </BaseLevel>
    </CardBox>
  )
}

export default CardBoxTransaction
