import { Children, cloneElement, ReactElement, ReactNode } from 'react'

type Props = {
  isColumn?: boolean
  children: ReactNode
}

const FormCheckRadioGroup = (props: Props) => {
  return (
    <div className={`flex justify-start flex-wrap -mb-3 ${props.isColumn ? 'flex-col' : ''}`}>
      {Children.map(props.children, (child: ReactElement) =>
        cloneElement(child, { className: `mr-6 mb-3 last:mr-0 ${child.props.className}` })
      )}
    </div>
  )
}

export default FormCheckRadioGroup
