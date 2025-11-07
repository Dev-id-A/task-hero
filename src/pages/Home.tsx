import { useEffect, useRef, useState} from "react"
import type { propsType, newTaskInterface } from "../assets/Functions, states & interfaces/Types&Interfaces"; 
import AlertWindow from "../assets/Windows/AlertWindow";
import LevelUpWindow from "../assets/Windows/LevelUpWindow";
import Navbar from "../assets/Home components/Navbar";
import TaskAccordion from "../assets/Home components/TaskAccordion";
import { homeJson } from "../assets/Json/HomeJson";
import { animationXPBar, reduceTimes, saveLevelAndXP } from "../assets/Functions, states & interfaces/TaskFunctions";


function Home({lang, setLang, nightMode, setNightMode}:propsType) {

  //Task states
  const [allTaskState, setAllTaskState] = useState<newTaskInterface[]>(()=>{
    const savedTask = localStorage.getItem("savedTask");

    return savedTask ? JSON.parse(savedTask):[];
  });
  const [dailyTaskState, setDailyTaskState] = useState<newTaskInterface[]>([]);
  const [addTask, setAddTask] = useState<boolean>(false);

  //Menu state
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  
  //Leveling states
  const [percentage, setPercentage] = useState<number>(0);
  const [eraseXPBar, setEraseXPBar] = useState<boolean>(false);
    //Saved states
    const [level, setLevel] = useState<number>(()=>{
      const actualLevel = localStorage.getItem("level");

      return actualLevel ? Number(actualLevel):1;
    });
    const [actualXP, setActualXP] = useState<number>(()=>{
      const userActualXP = localStorage.getItem("actualXP");

      return userActualXP ? Number(userActualXP):0;
    });
    const [maxXP, setMaxXP] = useState<number>(()=>{
      const userActualXP = localStorage.getItem("maxXP");

      return userActualXP ? Number(userActualXP):100;
    });

  //Windows states
  const [alertWindow, setAlertWindow] = useState<boolean>(false);   
  const [levelUpWindow, setLevelUpWindow] = useState<boolean>(false);   

  //Erasing task
  const [eraseTaskState, setEraseTaskState] = useState<boolean>(false);
  const taskToErase = useRef<number | null>(null);

  //Title state
  const [showTitle, setShowTitle] = useState<boolean>(false);

  //Local storage
  const username =  localStorage.getItem("username");

  useEffect(()=> saveLevelAndXP(level, actualXP, maxXP),[level, actualXP, maxXP]);

  useEffect(()=>localStorage.setItem("savedTask", JSON.stringify(allTaskState)),[allTaskState]);

  useEffect(()=> animationXPBar(actualXP, maxXP, setEraseXPBar, setLevelUpWindow, setPercentage, setLevel, setActualXP, setMaxXP),[actualXP]);

  //Erase and complete task functions 
  const eraseTask = (id: number) => setAllTaskState((prev)=> prev.filter((task)=> task.id !== id));
  
  //Obtain language
  useEffect(()=>{
      const actualLanguage = localStorage.getItem("lang");

        (actualLanguage == "es" || actualLanguage == "en" && setLang?.(actualLanguage))

  }, [])

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
        reduceTimes:(id)=>reduceTimes(id, setAllTaskState, setActualXP)}}/>

    </main>
          
  ) 
}

export default Home