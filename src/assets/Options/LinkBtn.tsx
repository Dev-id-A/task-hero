import type { Lang } from "../Types&Interfaces"; 
import { loginJson } from "../Json/LoginJson"
import { useNavigate } from "react-router"


function LinkBtn({lang, user}:{
    lang:Lang, user: React.RefObject<HTMLInputElement | null>
}) {
  const navigate = useNavigate();

  const storeUsername = ()=>{
    const username = user.current?.value
    if (username){
      localStorage.setItem("username", username);
      localStorage.setItem("lang", lang)
      navigate("/home");;
    }
  }
  return (
        <button onClick={()=>{storeUsername()}} className="border-1 border-black text-2xl w-30 h-15 bg-blue-300">
          {loginJson.enter[lang]}
        </button>
  )
}

export default LinkBtn