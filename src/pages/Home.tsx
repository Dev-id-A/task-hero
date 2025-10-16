import NightModeBtn from "../assets/Options/NightModeBtn"
import { useEffect} from "react"
import { homeJson } from "../assets/Json/HomeJson";
import type { propsType } from "../App"
import AddTaskBtn from "../assets/Task components/AddTaskBtn";
import { useState } from "react";
import TaskInput from "../assets/Task components/TaskInput";
import TaskToDo from "../assets/Task components/TaskToDo";


export interface newTaskInterface{
  task:string;
  times: number;
  difficult: string; 
}

let newtask: newTaskInterface = {
  task: "",
  times: 1,
  difficult: ""
}

let allTask:newTaskInterface[] = [{task:"Lavar los platos", times: 2, difficult: "Fácil"}]

function Home({lang, setLang, nightMode, setNightMode}: propsType) {

  const [allTaskState, setAllTaskState] = useState<newTaskInterface[]>(allTask)

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
        <TaskToDo {...{lang, allTaskState}}/>
      </section>

      <section className="min-h-100 flex flex-col items-center justify-center border-3 m-8">
        {addTask ?
        (<TaskInput {...{lang, setAllTaskState}}/>):
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