export default function BaseIcon({path, w='w-6', h='h-6', size, className}) {
  const iconSize = size ?? 16

  return (
    <span className={`inline-flex justify-center items-center ${w} ${h} ${className}`}>
      <svg viewBox="0 0 24 24" width={iconSize} height={iconSize} className="inline-block">
        <path fill="currentColor" d={path} />
      </svg>
    </span>
  )
}