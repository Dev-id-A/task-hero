import { homeJson } from "../Json/HomeJson"
import type { Lang } from "../Types&Interfaces"

function Menu({lang, username}: {lang:Lang, username: string | null}) {
  return (
    <section className={`w-screen h-screen fixed bg-black/50 backdrop-blur z-100`}>{homeJson.hello[lang]+ username}</section>
  )
}

export default Menu