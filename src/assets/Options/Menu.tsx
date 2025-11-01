import { homeJson } from "../Json/HomeJson"
import type { Lang, menuInterface } from "../Types&Interfaces"

function Menu({lang, username, openMenu, setOpenMenu}: {lang:Lang, username: string | null} & menuInterface) {
  return (
    <section className={`w-screen h-screen fixed bg-black/50 backdrop-blur z-100 transition-all duration-500
     ${openMenu ? "translate-x-0": "translate-x-100"}`}>
        <h2>{homeJson.hello[lang]+ username}</h2>
        <button onClick={()=> setOpenMenu(false)}>X</button>
        </section>
  )
}

export default Menu