import { useSelector } from 'react-redux'

export default function NavBarItemPlain({ display='flex', useMargin=false, children }) {
  const navBarItemLabelStyle = useSelector(state => state.style.navBarItemLabelStyle)
  const navBarItemLabelHoverStyle = useSelector(state => state.style.navBarItemLabelHoverStyle)

  const classBase = 'items-center cursor-pointer dark:text-white dark:hover:text-slate-400'
  const classAddon = `${display} ${navBarItemLabelStyle} ${navBarItemLabelHoverStyle} ${useMargin ? 'my-2 mx-3' : 'py-2 px-3'}`
  
  return (
    <div className={`${classBase} ${classAddon}`}>
      {children}
    </div>
  )
}