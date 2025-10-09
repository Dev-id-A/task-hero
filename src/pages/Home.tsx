import NightModeBtn from "../assets/NightModeBtn"
import React, { type RefObject } from "react"

function Home({nightMode, setNightMode, user}:
  {nightMode:boolean, setNightMode:React.Dispatch<React.SetStateAction<boolean>>, user:RefObject<HTMLInputElement | null>}
) {
  
  return (
    <main>
          <h1 className="text-center">Hello {user.current?.value}</h1>
          <NightModeBtn {...{nightMode, setNightMode}}/>
    </main>
          
  ) 
}

export default Home