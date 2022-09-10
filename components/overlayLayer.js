import { useSelector } from 'react-redux'

export default function OverlayLayer({zIndex="z-50", type="flex", children}) {
  const overlayStyle = useSelector(state => state.style.overlayStyle)

  return (
    <div className={`${type} ${zIndex} items-center flex-col justify-center overflow-hidden fixed inset-0`}>
      <div
        className={`${overlayStyle} absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700`}
      >

      </div>

      {children}
    </div>
  )
}