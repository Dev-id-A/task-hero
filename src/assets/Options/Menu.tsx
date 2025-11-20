import { homeJson } from "../Json/HomeJson"
import type { Lang, menuInterface } from "../Functions, states & interfaces/Types&Interfaces"
import type { ReactNode } from "react"

function Menu({children, lang, username, openMenu, setOpenMenu}: {children: ReactNode, lang:Lang, username: string | null} & menuInterface) {
  return (
    <section className={`w-screen h-screen fixed flex flex-col gap-10 items-center justify-center bg-black/50 backdrop-blur z-100 text-2xl
      transition-all duration-500 ${openMenu ? "translate-x-0": "translate-x-[100vw]"}`}>
      
      <div className="h-fit w-fit flex flex-col items-center justify-center gap-15 bg-white rounded-lg border-3 border-black p-5">
        <h2>{homeJson.hello[lang]+ username}</h2>
        {children}
        <button onClick={()=> setOpenMenu(false)}>X</button>
      </div>
    </section>
  )
}

export default Menu