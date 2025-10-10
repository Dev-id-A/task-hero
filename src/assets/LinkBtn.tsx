import type { Lang } from "../App"
import { loginJson } from "../assets/Json/LoginJson"
import { Link } from "react-router"


function LinkBtn({lang}:{
    lang:Lang
}) {
  return (
        <button className="border-1 text-2xl w-30 h-15 bg-blue-300">
          <Link to={"home"}>{loginJson.enter[lang]}</Link>
        </button>
  )
}

export default LinkBtn