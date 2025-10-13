import NightModeBtn from "../assets/NightModeBtn"
import React, { type RefObject } from "react"
import { homeJson } from "../assets/Json/HomeJson";
import type { Lang } from "../App"


function Home({lang, nightMode, setNightMode, user}:
  {lang:Lang, nightMode:boolean, setNightMode:React.Dispatch<React.SetStateAction<boolean>>, user:RefObject<HTMLInputElement | null>}
) {
  const username =  localStorage.getItem("username")

  return (
    <main className="min-h-screen">
      <div className="text-center bg-blue-500 text-3xl w-full h-10">
          <h1>{homeJson.hello[lang] + username}</h1>
      </div>
          



          <div className="hidden">
            <NightModeBtn {...{nightMode, setNightMode}}/>
          </div>

    </main>
          
  ) 
}

export default Home