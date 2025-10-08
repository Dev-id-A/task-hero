import LangIcon from "../assets/LangIcon"
import { loginJson } from "../assets/Json/LoginJson"
import type { Lang } from "../App"


function Login({lang, toggleFade}:
  {lang:Lang, toggleFade:(langParam:Lang) => void}
) {
  return (
    <main className="flex flex-col items-center gap-10">
      
      <h1 className="bg-blue-500 w-full text-3xl">Task hero</h1>
      
      <section className="flex flex-col items-center gap-3">
        <div className="text-center text-2xl">{loginJson.welcome[lang]}</div>
        <LangIcon src="public/svg/user-solid-full.svg" alt="Profile" background="bg-gray-300 rounded-full"/>
        <input className="border-1 text-center" type="text" name="username" id="username" placeholder={loginJson.userInput[lang]}/>
      </section>

      <section >
        <h2 className="text-center text-xl">{loginJson.language[lang]}</h2>

        <div>
          <LangIcon src="/svg/spain.svg" alt="Spanish icon" onClick={()=> toggleFade("es")}/>
          <LangIcon src="/svg/uk.svg" alt="English icon" onClick={()=> toggleFade("en")}/>
        </div>

      </section>

    </main>

  )
}

export default Login