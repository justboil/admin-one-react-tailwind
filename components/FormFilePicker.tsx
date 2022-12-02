import { useState } from 'react'
import { ColorButtonKey } from '../interfaces'
import BaseButton from './BaseButton'

type Props = {
  label?: string
  icon?: string
  accept?: string
  color: ColorButtonKey
  isRoundIcon?: boolean
}

const FormFilePicker = ({ label, icon, accept, color, isRoundIcon }: Props) => {
  const [file, setFile] = useState(null)

  const handleFileChange = (event) => {
    setFile(event.currentTarget.files[0])
  }

  const showFilename = !isRoundIcon && file

  return (
    <div className="flex items-stretch justify-start relative">
      <label className="inline-flex">
        <BaseButton
          className={`${isRoundIcon ? 'w-12 h-12' : ''} ${showFilename ? 'rounded-r-none' : ''}`}
          iconSize={isRoundIcon ? 24 : undefined}
          label={isRoundIcon ? null : label}
          icon={icon}
          color={color}
          roundedFull={isRoundIcon}
          asAnchor
        />
        <input
          type="file"
          className="absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1"
          onChange={handleFileChange}
          accept={accept}
        />
      </label>
      {showFilename && (
        <div className="px-4 py-2 max-w-full flex-grow-0 overflow-x-hidden bg-gray-100 dark:bg-slate-800 border-gray-200 dark:border-slate-700 border rounded-r">
          <span className="text-ellipsis max-w-full line-clamp-1">{file.name}</span>
        </div>
      )}
    </div>
  )
}

export default FormFilePicker
