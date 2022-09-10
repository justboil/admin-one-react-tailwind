export default function BaseLevel({mobile=false, type="justify-between", children}) {
  const parentClass = `${type} items-center`;

  const parentMobileClass = "flex";

  const parentBaseClass = "block md:flex";

  return (
    <div className={`${parentClass} ${mobile ? parentMobileClass : parentBaseClass}`}>
      {children}
    </div>
  )
}