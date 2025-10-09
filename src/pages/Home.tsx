import NightModeBtn from "../assets/NightModeBtn"
import React from "react"

function Home({nightMode, setNightMode}:
  {nightMode:boolean, setNightMode:React.Dispatch<React.SetStateAction<boolean>>}
) {
  return (
    <main>
          <h1 className="text-center">Hello user</h1>
          <NightModeBtn {...{nightMode, setNightMode}}/>
    </main>
          
  ) 
}

export default Home