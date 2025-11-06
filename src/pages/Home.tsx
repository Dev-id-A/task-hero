import { useEffect, useRef, useState} from "react"
import type { propsType, newTaskInterface } from "../assets/Types&Interfaces"; 
import AlertWindow from "../assets/Windows/AlertWindow";
import LevelUpWindow from "../assets/Windows/LevelUpWindow";
import Navbar from "../assets/Home components/Navbar";
import NormalTaskAccordion from "../assets/Home components/NormalTaskAccordion";
import { homeJson } from "../assets/Json/HomeJson";


function Home({lang, setLang, nightMode, setNightMode}
  : propsType) {

  //Task states
  const [allTaskState, setAllTaskState] = useState<newTaskInterface[]>(()=>{
    const savedTask = localStorage.getItem("savedTask");

    return savedTask ? JSON.parse(savedTask):[];
  });
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

  useEffect(()=>{
    localStorage.setItem("level", String(level));
    localStorage.setItem("actualXP", String(actualXP));
    localStorage.setItem("maxXP", String(maxXP));
  },[level, actualXP, maxXP]);

   useEffect(()=>{localStorage.setItem("savedTask", JSON.stringify(allTaskState));},[allTaskState]);

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
          setMaxXP(prev => Math.ceil(prev + 1.2));
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

  //Erase and complete task functions 
  const eraseTask = (id: number) => setAllTaskState((prev)=> prev.filter((task)=> task.id !== id));

  const reduceTimes = (id:number) => {
    let obtainedExp = 0;
    setAllTaskState(prev=>{
      const taskToComplete = prev.map(task=>{
        if (task.id === id){
          if(task.times > 1){
            return{...task, times: task.times-1}
          }
          obtainedExp = task.exp;
          return null;
        }
        return task;
      }).filter(Boolean) as newTaskInterface[];

      if(obtainedExp){
        console.log(obtainedExp)
        setActualXP(prevXP=> prevXP + obtainedExp);
        console.log(actualXP)
      }

      return taskToComplete;
    })
  }
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

        <NormalTaskAccordion title={homeJson.normalTask[lang]} user={{lang, setAlertWindow}} taskState={allTaskState} setTaskState={setAllTaskState}
        taskCreate={{addTask, setAddTask}}  taskErase={{eraseTask, eraseTaskState, setEraseTaskState, taskToErase, reduceTimes}}/>


    </main>
          
  ) 
}

export default Home