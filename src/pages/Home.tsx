import NightModeBtn from "../assets/Options/NightModeBtn"
import { useEffect, type Dispatch, type SetStateAction } from "react"
import { difficults, homeJson } from "../assets/Json/HomeJson";
import type {  Lang, propsType } from "../App"
import AddTaskBtn from "../assets/Task components/AddTaskBtn";
import { useState } from "react";
import TaskInput from "../assets/Task components/TaskInput";
import TaskToDo from "../assets/Task components/TaskToDo";

export interface taskInterface {
  lang: Lang
  taskInput?: string
  setTaskInput?: Dispatch<SetStateAction<string>>
  timesInput?: number
  setTimesInput?: Dispatch<SetStateAction<number>>
  difficult?: string
  setDifficult?: Dispatch<SetStateAction<string>>
}


function Home({lang, setLang, nightMode, setNightMode}: propsType) {

  //Task instructions
  const [taskInput, setTaskInput] = useState<string>("");
  const [timesInput, setTimesInput] = useState<number>(1)
  const [difficult, setDifficult] = useState<string>(difficults[0][lang]);

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
        <TaskToDo {...{lang, taskInput, timesInput, difficult}}/>
      </section>

      <section className="min-h-100 flex flex-col items-center justify-center border-3 m-8">
        {addTask ?
        (<TaskInput {...{lang, setTaskInput, setTimesInput, setDifficult}}/>):
        (<AddTaskBtn {...{addTask, addTaskFun}}/>)}
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