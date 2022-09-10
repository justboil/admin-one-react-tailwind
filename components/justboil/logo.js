import justboilLogoPath from './logoPath'

export default function JustboilLogo({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="250"
      height="100"
      viewBox="0 0 250 100"
      className={className}
    >
      <path
        fill="currentColor"
        d={justboilLogoPath}
      />
    </svg>
  )
}