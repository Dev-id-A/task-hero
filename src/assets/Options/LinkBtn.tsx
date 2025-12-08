import type { Lang } from "../Functions, states & interfaces/Types&Interfaces"; 
import { loginJson } from "../Json/LoginJson"
import { useNavigate } from "react-router"


function LinkBtn({lang, user, nightMode}:{
    lang:Lang, user: React.RefObject<HTMLInputElement | null>, nightMode: boolean
}) {
  const navigate = useNavigate();

  const storeUsername = ()=>{
    const username = user.current?.value
    if (username){
      localStorage.setItem("username", username);
      navigate("/home");;
    }
  }
  return (
        <button onClick={()=>{storeUsername()}} className={`border-1 border-black text-2xl xl:text-3xl w-30 h-15 xl:w-35 xl:h-18 bg-blue-300
        ${nightMode ? "border-3 border-[#36648B]":"border-1 border-black"}`}>
          {loginJson.enter[lang]}
        </button>
  )
}

export default LinkBtn