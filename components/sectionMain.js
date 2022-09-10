import { containerMaxW } from "../src/config"

export default function SectionMain({children}) {
  return (
    <section className={`p-6 ${containerMaxW}`}>
      {children}
    </section>
  )
}