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
    <main className={`flex flex-col items-center justify-center gap-15 ${nightMode ? "bg-black text-white":"bg-white"} min-h-screen`} >
      
      <div className="absolute flex flex-row items-center justify-between top-0 py-3 px-4 bg-blue-500 w-full text-3xl px-2">
        <h1 className="">Task hero</h1>
        <NightModeBtn {...{nightMode, setNightMode}} />
      </div>
      
        <h2 className="text-center text-3xl ">{loginJson.welcome[lang]}</h2>
        
      <section className="flex flex-col items-center gap-3">
        <LangIcon src="/svg/user-solid-full.svg" alt="Profile" btnStyle="bg-gray-300 rounded-full p-1 border-1 border-black rounded-full"/>
        <input className="border-1 border-black text-center text-xl py-1" type="text" name="username" id="username" placeholder={loginJson.userInput[lang]} 
        ref={user} onChange={handleChangeBtn}/>
      </section>

      <LangOptions {...{lang, toggleFade}}/>

        {hasValue ? 
        (
          <LinkBtn {...{lang, user}}/>
        ):(
        <button className="border-1 text-2xl w-30 h-15 bg-gray-300">{loginJson.enter[lang]}</button>
        )}
        

    </main>

  )
}

export default Login