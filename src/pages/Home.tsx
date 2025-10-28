import NightModeBtn from "../assets/Options/NightModeBtn"
import { useEffect, useState} from "react"
import { homeJson } from "../assets/Json/HomeJson";
import type { levelInterface, propsType } from "../assets/Types&Interfaces"; 
import AddTaskBtn from "../assets/Task components/AddTaskBtn";
import TaskInput from "../assets/Task components/TaskInput";
import TaskToDo from "../assets/Task components/TaskToDo";
import AlertWindow from "../assets/Windows/AlertWindow";
import XPBar from "../assets/XPBar/XPBar";


export interface newTaskInterface{
  task: string;
  times: number;
  difficult: string; 
  id: number
  exp: number
}


function Home({lang, setLang, nightMode, setNightMode, level, setLevel, actualXP, setActualXP, maxXP, setMaxXP}
  : propsType & levelInterface) {

  const [allTaskState, setAllTaskState] = useState<newTaskInterface[]>([]);
  const username =  localStorage.getItem("username");
  const [addTask, setAddTask] = useState<boolean>(false);
  const [percentage, setPercentage] = useState<number>(0)   

  useEffect(() => setPercentage(actualXP / maxXP * 100),[actualXP])

  //Both would have diferent functionality in the future
  const eraseTask = (id: number)=>{
    setAllTaskState((prev)=> prev.filter((task)=> task.id !== id))
  }

  const completeTask = (id: number)=>{
    setAllTaskState((prev)=> prev.filter((task)=> task.id !== id))
  }

  const reduceTimes = (id: number) => {
    setAllTaskState((prev)=> prev.map((task)=> task.id === id ?
      {...task, 
        times: task.times > 1 ? task.times - 1
        :(completeTask(task.id), task.times)
      }
      :task))
  } 

  useEffect(()=>{
      const actualLanguage = localStorage.getItem("lang");

        (actualLanguage == "es" || actualLanguage == "en" && setLang?.(actualLanguage))

  }, [])

  return (
    <main className="min-h-screen w-full">

      <AlertWindow {...{lang}}/>

      <section className="text-center bg-blue-500 text-3xl w-full">
          <h1>{homeJson.hello[lang] + username}</h1>
          <div className="flex flex-row">
            <h1 className="w-1/2">LVL {level}</h1>
            <XPBar {...{percentage}}/>
          </div>
      </section>

      
        {allTaskState.map((object, i)=>{
          return <section key={i + "section"} className="min-h-100 flex flex-col items-center justify-center border-3 m-8">
                    <TaskToDo key={i} {...{lang, object, reduceTimes, eraseTask}} />
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