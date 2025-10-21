import NightModeBtn from "../assets/Options/NightModeBtn"
import { useEffect, useState} from "react"
import { homeJson } from "../assets/Json/HomeJson";
import type { propsType } from "../App"
import AddTaskBtn from "../assets/Task components/AddTaskBtn";
import TaskInput from "../assets/Task components/TaskInput";
import TaskToDo from "../assets/Task components/TaskToDo";


export interface newTaskInterface{
  task: string;
  times: number;
  difficult: string; 
  id: number
}


function Home({lang, setLang, nightMode, setNightMode}: propsType) {

  const [allTaskState, setAllTaskState] = useState<newTaskInterface[]>([])

  const completeTask = (id: number)=>{
    setAllTaskState((prev)=> prev.filter((task)=> task.id !== id))
  }

  const reduceTimes = (id: number) => {
    setAllTaskState((prev)=> prev.map((task)=> task.id === id ?
      {...task, times: task.times > 1 ? task.times--:1}:task))
  } 

  const username =  localStorage.getItem("username");
  const [addTask, setAddTask] = useState<boolean>(false);


  useEffect(()=>{
      const actualLanguage = localStorage.getItem("lang");

        (actualLanguage == "es" || actualLanguage == "en" && setLang?.(actualLanguage))

  }, [])

  return (
    <main className="min-h-screen w-full">
      <div className="text-center bg-blue-500 text-3xl w-full h-10">
          <h1>{homeJson.hello[lang] + username}</h1>
      </div>

      
        {allTaskState.map((object, i)=>{
          return <section key={i + "section"} className="min-h-100 flex flex-col items-center justify-center border-3 m-8">
                    <TaskToDo key={i} {...{lang, object, completeTask, reduceTimes}} />
                  </section>
        })}
     

      <section className="min-h-100 flex flex-col items-center justify-center border-3 m-8">
        {addTask ?
        (<TaskInput {...{lang, allTaskState, setAllTaskState, setAddTask}}/>):
        (<AddTaskBtn {...{addTask, setAddTask}}/>)}
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