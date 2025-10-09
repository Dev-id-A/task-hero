import NightModeBtn from "../assets/NightModeBtn"
import React, { type RefObject } from "react"

function Home({nightMode, setNightMode, user}:
  {nightMode:boolean, setNightMode:React.Dispatch<React.SetStateAction<boolean>>, user:RefObject<HTMLInputElement | null>}
) {
  
  return (
    <main className="min-h-screen">
          <h1 className="text-center bg-blue-500 text-3xl">Hello {user.current?.value}</h1>
          <NightModeBtn {...{nightMode, setNightMode}}/>
    </main>
          
  ) 
}

export default Home