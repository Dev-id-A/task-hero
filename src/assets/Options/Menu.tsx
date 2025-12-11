import { homeJson } from "../Json/HomeJson"
import type { Lang, menuInterface } from "../Functions, states & interfaces/Types&Interfaces"
import type { ReactNode } from "react"

function Menu({nightMode, children, lang, username, openMenu, setOpenMenu}: 
  {children: ReactNode, lang:Lang, username: string | null} & menuInterface) {
  return (
    <section className={`w-screen h-screen fixed flex flex-col gap-10 items-center justify-center bg-black/50 backdrop-blur z-100 text-2xl
     ${openMenu ? "translate-x-0 transition-all duration-500": "translate-x-[100vw]"}
     ${nightMode ? "text-white":"text-black"}`}>
      
      <div className={`h-fit w-[80vw] md:w-[50vw] flex flex-col items-center justify-center gap-15 rounded-lg border-3 border-black p-5
        ${nightMode ? "bg-black border-white":"bg-white border-black"}`}>
        <h2>{homeJson.hello[lang]+ username}</h2>
        {children}
        <button onClick={()=> setOpenMenu(false)}>X</button>
      </div>
    </section>
  )
}

export default Menu