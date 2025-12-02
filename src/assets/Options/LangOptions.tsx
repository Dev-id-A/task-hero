import type { Lang } from "../Functions, states & interfaces/Types&Interfaces"
import { loginJson } from "../Json/LoginJson"
import LangIcon from "./LangIcon"

function LangOptions({lang, toggleFade}: {lang: Lang, toggleFade: ((langParam:Lang)=>void) | undefined}) {
  return (
    <section className="flex flex-col gap-3">
        <h2 className="text-center text-xl">{loginJson.language[lang]}</h2>

        <div>
          <LangIcon src="/svg/spain.svg" alt="Spanish icon" onClick={()=> toggleFade?.("es")}/>
          <LangIcon src="/svg/uk.svg" alt="English icon" onClick={()=> toggleFade?.("en")}/>
        </div>

      </section>
  )
}

export default LangOptions