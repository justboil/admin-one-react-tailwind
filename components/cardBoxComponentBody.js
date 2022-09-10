export default function CardBoxComponentBody({ noPadding, children }) {
  return <div className={`flex-1 ${noPadding ? '' : 'p-6'}`}>{children}</div>
}
