import NightModeBtn from "../assets/Options/NightModeBtn"
import { useEffect, useRef, useState} from "react"
import { homeJson } from "../assets/Json/HomeJson";
import type { propsType } from "../assets/Types&Interfaces"; 
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


function Home({lang, setLang, nightMode, setNightMode}
  : propsType) {

  const [allTaskState, setAllTaskState] = useState<newTaskInterface[]>([]);
  const username =  localStorage.getItem("username");
  const [addTask, setAddTask] = useState<boolean>(false);
  
  //Leveling states
  const [percentage, setPercentage] = useState<number>(0);
  const [level, setLevel] = useState<number>(1);
  const [actualXP, setActualXP] = useState<number>(0);
  const [maxXP, setMaxXP] = useState<number>(100);

  //Erasing task
  const [alertWindow, setAlertWindow] = useState<boolean>(false);   
  const [eraseTaskState, setEraseTaskState] = useState<boolean>(false);
  const taskToErase = useRef<number | null>(null)

  useEffect(() => {
    setPercentage(actualXP / maxXP * 100);
    if(actualXP>=maxXP){
      setLevel(prev=> prev + 1);
      setActualXP(prev=> prev = actualXP - maxXP);
      setMaxXP(prev=> Math.ceil(prev * 1.2));
    }
  },[actualXP]);


  const eraseTask = (id: number) => setAllTaskState((prev)=> prev.filter((task)=> task.id !== id));
  const completeTask = (id: number)=>{
    setAllTaskState((prev)=> prev.filter((task)=> {
      setActualXP((prev)=>prev + task.exp)
      task.id !== id;
    }));
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

      <AlertWindow {...{lang, alertWindow, setAlertWindow, setEraseTaskState}}/>

      <section className="text-center bg-blue-500 text-3xl w-full">
          <h1>{homeJson.hello[lang] + username}</h1>
          <div className="flex flex-row">
            <h1 className="w-1/2">LVL {level}</h1>
            <XPBar {...{percentage}}/>
          </div>
      </section>
      
        {allTaskState.map((object, i)=>{
          return <section key={i + "section"} className="min-h-100 flex flex-col items-center justify-center border-3 m-8">
                    <TaskToDo key={i} 
                    {...{lang, object, reduceTimes, eraseTask, setAlertWindow, eraseTaskState, setEraseTaskState, taskToErase}} />
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