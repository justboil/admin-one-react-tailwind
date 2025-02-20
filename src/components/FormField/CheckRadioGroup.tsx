import { ReactNode } from 'react'

type Props = {
  isColumn?: boolean
  children: ReactNode
}

const FormCheckRadioGroup = (props: Props) => {
  return (
    (<div className={`flex justify-start flex-wrap -mb-3 ${props.isColumn ? 'flex-col' : ''}`}>
      {props.children}
    </div>)
  );
}

export default FormCheckRadioGroup
