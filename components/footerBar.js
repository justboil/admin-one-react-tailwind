import { containerMaxW } from "../src/config";
import BaseLevel from "./baseLevel";
import JustboilLogo from "./justboil/logo";

export default function FooterBar({children}) {
  const year = new Date().getFullYear();

  return (
    <footer className={`py-2 px-6 ${containerMaxW}`}>
      <BaseLevel>
        <div className="text-center md:text-left mb-6 md:mb-0">
          <b
            >&copy;{year},{` `}
            <a href="https://justboil.me/" rel="noreferrer" target="_blank">JustBoil.me</a>.</b
          >{` `}
          {children}
        </div>
        <div className="md:py-2">
          <a href="https://justboil.me" rel="noreferrer" target="_blank">
            <JustboilLogo className="w-auto h-8 md:h-6" />
          </a>
        </div>
      </BaseLevel>
    </footer>
  )
}