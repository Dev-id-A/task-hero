import { homeJson } from "../Json/HomeJson"
import type { Lang, menuInterface } from "../Types&Interfaces"
import type { ReactNode } from "react"

function Menu({children, lang, username, openMenu, setOpenMenu}: {children: ReactNode, lang:Lang, username: string | null} & menuInterface) {
  return (
    <section className={`w-screen h-screen fixed flex flex-col gap-10 items-center bg-black/50 backdrop-blur z-100 transition-all duration-500
     ${openMenu ? "translate-x-0": "translate-x-[100vw]"}`}>
        <h2>{homeJson.hello[lang]+ username}</h2>
        {children}
        <button onClick={()=> setOpenMenu(false)}>X</button>
        </section>
  )
}

export default Menu