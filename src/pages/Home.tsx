import NightModeBtn from "../assets/Options/NightModeBtn"
import React, { type RefObject } from "react"
import { homeJson } from "../assets/Json/HomeJson";
import type { Lang } from "../App"
import AddTaskBtn from "../assets/AddTaskBtn";
import { useState } from "react";
import TaskInput from "../assets/TaskInput";


function Home({lang, nightMode, setNightMode}:
  {lang:Lang, nightMode:boolean, setNightMode:React.Dispatch<React.SetStateAction<boolean>>, user:RefObject<HTMLInputElement | null>}
) {
  const username =  localStorage.getItem("username");
  const [addTask, setAddtask] = useState<boolean>(false)

  const addTaskFun = () =>{
    setAddtask(true)
  }

  return (
    <main className="min-h-screen w-full">
      <div className="text-center bg-blue-500 text-3xl w-full h-10">
          <h1>{homeJson.hello[lang] + username}</h1>
      </div>

      <section className="h-100 flex flex-col items-center justify-center border-3 m-8">
        {addTask ?
        (<TaskInput {...{lang}}/>):
        (<AddTaskBtn {...{lang, addTask, addTaskFun}}/>)}
      </section>


          {/*Testing the page only*/}
      <button onClick={()=>localStorage.clear()}>Borrar</button>

          <div className="hidden">
            <NightModeBtn {...{nightMode, setNightMode}}/>
          </div>

    </main>
          
  ) 
}

export default Home