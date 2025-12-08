import LangIcon from "../assets/Options/LangIcon"
import { loginJson } from "../assets/Json/LoginJson"
import LinkBtn from "../assets/Options/LinkBtn"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import type { propsType } from "../assets/Functions, states & interfaces/Types&Interfaces" 
import NightModeBtn from "@/assets/Options/NightModeBtn"
import LangOptions from "@/assets/Options/LangOptions"


function Login({lang, toggleFade, nightMode, setNightMode, user}: propsType) {
  const navigate = useNavigate();

  const [hasValue, setHasValue] = useState(false);

    useEffect(()=>{
      const storedUser = localStorage.getItem("username");

      if(storedUser && user.current){
        user.current.value = storedUser
        navigate("/home")
      };
  },[]);

  const handleChangeBtn = () =>{
    setHasValue(!!user.current?.value.trim())
  }

  return (
    <main className={`flex flex-col items-center justify-center gap-15 lg:gap-18 lg:pt-15
    ${nightMode ? "bg-[#1F1F1F] text-white":"bg-white"} min-h-screen`} >
      
      <div className={`absolute flex flex-row items-center justify-between top-0 py-3 px-4 bg-[#63B8FF] w-full text-3xl xl:text-4xl px-2
      ${nightMode && "bg-[#36648B]"}`}>
        <h1>Task hero</h1>
        <NightModeBtn {...{nightMode, setNightMode}} />
      </div>
      
        <h2 className="text-center text-3xl xl:text-4xl">{loginJson.welcome[lang]}</h2>
        
      <section className="flex flex-col items-center gap-3 xl:gap-5">
        <LangIcon src="/svg/user-solid-full.svg" alt="Profile" btnStyle="bg-gray-300 p-1 rounded-full" {...{nightMode}}/>
        <input className={`text-center text-xl xl:text-2xl py-1
        ${nightMode ? "bg-white text-black border-3 border-[#36648B]":"border-1 border-black"}`} 
        type="text" name="username" id="username" placeholder={loginJson.userInput[lang]} ref={user} onChange={handleChangeBtn}/>
      </section>

      <LangOptions {...{lang, toggleFade, nightMode}}/>

        {hasValue ? 
        (
          <LinkBtn {...{lang, user, nightMode}}/>
        ):(
        <button className={`border-1 text-2xl xl:text-3xl w-30 h-15 xl:w-35 xl:h-18 bg-gray-300
          ${nightMode ? "border-3 border-[#36648B]":"border-1 border-black"}`}>{loginJson.enter[lang]}</button>
        )}
        

    </main>

  )
}

export default Login