import NightModeBtn from "../assets/Options/NightModeBtn"
import Menu from "../assets/Options/Menu";
import { useEffect, useRef, useState} from "react"
import type { propsType } from "../assets/Types&Interfaces"; 
import { titlesJson } from "../assets/Json/AlertsJson";
import AddTaskBtn from "../assets/Task components/AddTaskBtn";
import TaskInput from "../assets/Task components/TaskInput";
import TaskToDo from "../assets/Task components/TaskToDo";
import AlertWindow from "../assets/Windows/AlertWindow";
import LevelUpWindow from "../assets/Windows/LevelUpWindow";
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

  //Local storage
  const username =  localStorage.getItem("username");

  //Task states
  const [allTaskState, setAllTaskState] = useState<newTaskInterface[]>([]);
  const [addTask, setAddTask] = useState<boolean>(false);

  //Menu state
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  
  //Leveling states
  const [percentage, setPercentage] = useState<number>(0);
  const [level, setLevel] = useState<number>(1);
  const [actualXP, setActualXP] = useState<number>(0);
  const [maxXP, setMaxXP] = useState<number>(100);
  const [eraseXPBar, setEraseXPBar] = useState<boolean>(false);

  //Windows states
  const [alertWindow, setAlertWindow] = useState<boolean>(false);   
  const [levelUpWindow, setLevelUpWindow] = useState<boolean>(false);   

  //Erasing task
  const [eraseTaskState, setEraseTaskState] = useState<boolean>(false);
  const taskToErase = useRef<number | null>(null);

  //Title state
  const [showTitle, setShowTitle] = useState<boolean>(false);

  useEffect(() => {
    if(actualXP>=maxXP){
      setPercentage(100);

        const eraseBar = setTimeout(()=>{
          setLevel(prev=> prev + 1);
          setPercentage(0);
          setEraseXPBar(true);
        },800)

        const continueBar = setTimeout(()=>{
          setEraseXPBar(false);
          setActualXP(prev => prev = prev - maxXP);
          setMaxXP(prev => Math.ceil(prev + 100));
          setPercentage(actualXP / maxXP * 100);
            setTimeout(()=>setLevelUpWindow(true),500)
      },1600)


      return ()=>{
        clearTimeout(eraseBar);
        clearTimeout(continueBar);
      }
    }
    setPercentage(actualXP / maxXP * 100);


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
    <main className="min-h-screen w-full bg-blue-100">

      <LevelUpWindow {...{lang, level, levelUpWindow, setLevelUpWindow}}/>
      <AlertWindow {...{lang, alertWindow, setAlertWindow, setEraseTaskState}}/>

          <section className="min-h-10 text-center bg-blue-500 text-3xl w-full flex flex-row border-t-1 border-blue-600">

            <div className="w-full flex flex-row" onClick={()=> setShowTitle(prev=> !prev)}>
            {showTitle ? 
            (<h1 className="text-center w-full">{titlesJson[level-1][lang]}</h1>):
            (<>
              <h1 className="min-w-20">LVL {level}</h1>
              <XPBar {...{percentage, eraseXPBar}}/>
            </>)
            }
            </div>

            <Menu {...{lang, username, openMenu, setOpenMenu}} 
            children={<>
              <NightModeBtn {...{nightMode, setNightMode}}/>
              {/*Testing the page only*/}
              <button onClick={()=>localStorage.clear()}>Borrar</button>
              </>}/>

            <button className="h-10 w-18" onClick={()=>setOpenMenu(true)}>
              <img src="/svg/hamburger.svg" alt="Hamburger icon" className="h-full w-full"/>
            </button>

          </section>
      
        {allTaskState.map((object, i)=>{
          return <section key={i + "section"} className="bg-blue-200 min-h-100 flex flex-col items-center justify-center border-3 m-8">
                    <TaskToDo key={i} 
                    {...{lang, object, reduceTimes, eraseTask, setAlertWindow, eraseTaskState, setEraseTaskState, taskToErase}} />
                  </section>
        })}
     

      <section className="bg-blue-200 min-h-100 flex flex-col items-center justify-center border-3 m-8">
        {addTask ?
        (<TaskInput {...{lang, allTaskState, setAllTaskState, setAddTask}}/>):
        (<AddTaskBtn {...{addTask, setAddTask}}/>)}
      </section>

    </main>
          
  ) 
}

export default Home