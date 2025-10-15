import NightModeBtn from "../assets/Options/NightModeBtn"
import { useEffect } from "react"
import { homeJson } from "../assets/Json/HomeJson";
import type {  propsType } from "../App"
import AddTaskBtn from "../assets/Task components/AddTaskBtn";
import { useState } from "react";
import TaskInput from "../assets/Task components/TaskInput";
import TaskToDo from "../assets/Task components/TaskToDo";




function Home({lang, setLang, nightMode, setNightMode}: propsType) {



  const username =  localStorage.getItem("username");
  const [addTask, setAddtask] = useState<boolean>(false)

  const addTaskFun = () =>{
    setAddtask(true)
  }

  useEffect(()=>{
      const actualLanguage = localStorage.getItem("lang");

        (actualLanguage == "es" || actualLanguage == "en" && setLang?.(actualLanguage))

  }, [])

  return (
    <main className="min-h-screen w-full">
      <div className="text-center bg-blue-500 text-3xl w-full h-10">
          <h1>{homeJson.hello[lang] + username}</h1>
      </div>

      <section className="min-h-100 flex flex-col items-center justify-center border-3 m-8">
        <TaskToDo {...{lang}}/>
      </section>

      <section className="min-h-100 flex flex-col items-center justify-center border-3 m-8">
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