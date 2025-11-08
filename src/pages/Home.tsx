import { useEffect, useRef, useState} from "react"
import type { propsType } from "../assets/Functions, states & interfaces/Types&Interfaces"; 
import AlertWindow from "../assets/Windows/AlertWindow";
import LevelUpWindow from "../assets/Windows/LevelUpWindow";
import Navbar from "../assets/Home components/Navbar";
import TaskAccordion from "../assets/Home components/TaskAccordion";
import { homeJson } from "../assets/Json/HomeJson";
import { animationXPBar, reduceTimes, saveLevelAndXP } from "../assets/Functions, states & interfaces/HomeFunctions";
import { taskState, levelStates, windowsState, taskEraseState } from "../assets/Functions, states & interfaces/HomeStates";


function Home({lang, setLang, nightMode, setNightMode}:propsType) {

  //Task states
  const {allTaskState, setAllTaskState, dailyTaskState, setDailyTaskState, addTask, setAddTask} = taskState();

  //Erasing task
  const {eraseTaskState, setEraseTaskState, taskToErase} = taskEraseState();

  //Menu state
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  //Leveling states
  const{ percentage, setPercentage, eraseXPBar, setEraseXPBar,
  //Saved leveling states
    level, setLevel, actualXP, setActualXP, maxXP, setMaxXP} = levelStates();

  //Windows states
  const {alertWindow, setAlertWindow, levelUpWindow, setLevelUpWindow} = windowsState();

  //Title state
  const [showTitle, setShowTitle] = useState<boolean>(false);

  //Local storage
  const username =  localStorage.getItem("username");

  useEffect(()=> saveLevelAndXP(level, actualXP, maxXP),[level, actualXP, maxXP]);

  useEffect(()=> localStorage.setItem("savedTask", JSON.stringify(allTaskState)),[allTaskState]);

  useEffect(()=> localStorage.setItem("savedDailyTask", JSON.stringify(dailyTaskState)),[dailyTaskState]);

  useEffect(()=> animationXPBar(actualXP, maxXP, setEraseXPBar, setLevelUpWindow, setPercentage, setLevel, setActualXP, setMaxXP),[actualXP]);

  //Erase and complete task functions 
  const eraseTask = (id: number) => setAllTaskState((prev)=> prev.filter((task)=> task.id !== id));
  
  //Obtain language
  useEffect(()=>{
      const actualLanguage = localStorage.getItem("lang");

        (actualLanguage == "es" || actualLanguage == "en" && setLang?.(actualLanguage))
  }, [])

  const daily = useRef<boolean>(true);

  //Reset everyday
  useEffect(()=>{
    const lastDay = localStorage.getItem("lastDay");
    const today = new Date().toDateString()

    if(lastDay !== today){
      setDailyTaskState(prev=> prev.map(task=> ({...task, completed: false})))
      localStorage.setItem("lastDay", today);
    }
  }
    ,[])


  return (
    <main className="min-h-screen w-full bg-blue-100 overflow-x-hidden">

      <LevelUpWindow {...{lang, level, levelUpWindow, setLevelUpWindow}}/>
      <AlertWindow {...{lang, alertWindow, setAlertWindow, setEraseTaskState}}/>

        <Navbar user={{lang, username}} title={{showTitle, setShowTitle}} 
          levelOptions={{level, percentage, eraseXPBar}} menu={{openMenu, setOpenMenu}} night={{nightMode, setNightMode}} />

        <TaskAccordion title={homeJson.normalTask[lang]} user={{lang, setAlertWindow}} taskState={allTaskState} setTaskState={setAllTaskState}
          taskCreate={{addTask, setAddTask}}  taskErase={{eraseTask, eraseTaskState, setEraseTaskState, taskToErase, 
          reduceTimes:(id)=>reduceTimes(id, setAllTaskState, setActualXP)}}/>

        <TaskAccordion title={homeJson.dailyTask[lang]} user={{lang, setAlertWindow}} taskState={dailyTaskState} setTaskState={setDailyTaskState}
          taskCreate={{addTask, setAddTask}}  taskErase={{eraseTask, eraseTaskState, setEraseTaskState, taskToErase, 
          reduceTimes:(id)=>reduceTimes(id, setDailyTaskState, setActualXP)}} daily={daily}/>

    </main>
          
  ) 
}

export default Home