import LangIcon from "../assets/LangIcon"
import { loginJson } from "../assets/Json/LoginJson"
import type { Lang } from "../App"
import type React from "react"
import LinkBtn from "../assets/LinkBtn"
import { useState } from "react"


function Login({lang, toggleFade, nightMode, user}:
  {lang: Lang, toggleFade: (langParam:Lang) => void, nightMode: boolean, user: React.RefObject<HTMLInputElement | null>}
) {
  const [hasValue, setHasValue] = useState(false)

  const handleChangeBtn = () =>{
    setHasValue(!!user.current?.value.trim())
  }
  return (
    <main className={`flex flex-col items-center justify-center gap-20 ${nightMode ? "bg-black text-white":"bg-white"} min-h-screen`} >
      
      <h1 className="absolute top-0 bg-blue-500 w-full text-3xl px-2">Task hero</h1>
      
      <h2 className="text-center text-3xl ">{loginJson.welcome[lang]}</h2>


      <section className="flex flex-col items-center gap-3">
        <LangIcon src="public/svg/user-solid-full.svg" alt="Profile" btnStyle="bg-gray-300 rounded-full p-1 border-1 rounded-full"/>
        <input className="border-1 text-center text-xl py-1" type="text" name="username" id="username" placeholder={loginJson.userInput[lang]} 
        ref={user} onChange={handleChangeBtn}/>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-center text-xl">{loginJson.language[lang]}</h2>

        <div>
          <LangIcon src="/svg/spain.svg" alt="Spanish icon" onClick={()=> toggleFade("es")}/>
          <LangIcon src="/svg/uk.svg" alt="English icon" onClick={()=> toggleFade("en")}/>
        </div>

      </section>
        {hasValue ? 
        (
          <LinkBtn {...{lang}}/>
        ):(
        <button className="border-1 text-2xl w-30 h-15 bg-gray-300">{loginJson.enter[lang]}</button>
        )}
        

    </main>

  )
}

export default Login