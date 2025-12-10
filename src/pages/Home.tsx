import { useEffect, useState} from "react"
import type { propsType } from "../assets/Functions, states & interfaces/Types&Interfaces"; 
import EraseWindow from "../assets/Windows/EraseWindow";
import LevelUpWindow from "../assets/Windows/LevelUpWindow";
import AlertWindow from "../assets/Windows/AlertWindow";
import Navbar from "../assets/Home components/Navbar";
import TaskAccordion from "../assets/Home components/TaskAccordion";
import { homeJson } from "../assets/Json/HomeJson";
import { alertJson } from "../assets/Json/AlertsJson";
import { animationXPBar, reduceTimes, saveLevelAndXP, eraseTask, resetRecurrentTask, getLang } from "../assets/Functions, states & interfaces/HomeFunctions";
import { taskState, levelStates, windowsState, taskEraseState,} from "../assets/Functions, states & interfaces/HomeStates";

function Home({lang, setLang, nightMode, setNightMode, toggleFade}:propsType) {

  //Task states
  const {allTaskState, setAllTaskState, dailyTaskState, setDailyTaskState, weeklyTaskState, setWeeklyTaskState,
     addTask, setAddTask, recurrent} = taskState();

  //Erasing task
  const {eraseTaskState, setEraseTaskState, taskToErase} = taskEraseState();

  //Menu state
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  //Leveling states
  const{ percentage, setPercentage, eraseXPBar, setEraseXPBar,
  //Saved leveling states
    level, setLevel, actualXP, setActualXP, maxXP, setMaxXP} = levelStates();

  //Windows states
  const {eraseWindow, setEraseWindow, levelUpWindow, setLevelUpWindow, alertWindow, setAlertWindow, alertMsgRef,
    eraseAccountWindow, setEraseAccountWindow} = windowsState();

  //Title state
  const [showTitle, setShowTitle] = useState<boolean>(false);
  
  //Erase account
  const [eraseAccount, setEraseAccount] = useState(false);

  //Local storage
  const username =  localStorage.getItem("username");

  useEffect(()=> saveLevelAndXP(level, actualXP, maxXP),[level, actualXP, maxXP]);

  useEffect(()=> localStorage.setItem("savedTask", JSON.stringify(allTaskState)),[allTaskState]);

  useEffect(()=> localStorage.setItem("savedDailyTask", JSON.stringify(dailyTaskState)),[dailyTaskState]);

  useEffect(()=> localStorage.setItem("savedWeeklyTask", JSON.stringify(weeklyTaskState)),[weeklyTaskState]);

  useEffect(()=> animationXPBar(actualXP, maxXP, level, setEraseXPBar, setLevelUpWindow, setPercentage, setLevel, setActualXP, setMaxXP),[actualXP]);

  useEffect(()=>{
    getLang(setLang); //Obtain language
    resetRecurrentTask(setDailyTaskState, false); //Reset everyday
    resetRecurrentTask(setWeeklyTaskState, true); //Reset weekly
  } ,[])

  return (
    <main className={`min-h-screen w-full ${nightMode ? "bg-[#1F1F1F] text-white":"bg-white"} overflow-x-hidden`}>

      <LevelUpWindow {...{lang, level, levelUpWindow, setLevelUpWindow}}/>
      <EraseWindow lang={lang} windowBool={eraseWindow} windowBoolSetter={setEraseWindow} 
        eraserFnc={setEraseTaskState} alertText={alertJson.eraseTask[lang]}/>
      <AlertWindow  {...{alertMsgRef, alertWindow, setAlertWindow}}/>

        <Navbar user={{lang, username}} title={{showTitle, setShowTitle}} toggleFade={toggleFade}  
          account={{eraseAccountWindow, setEraseAccountWindow, eraseAccount, setEraseAccount}}
          levelOptions={{level, percentage, eraseXPBar}} menu={{openMenu, setOpenMenu}} night={{nightMode, setNightMode}} />

        <TaskAccordion {...{nightMode}} title={homeJson.normalTask[lang]} user={{lang, setEraseWindow}} taskState={allTaskState} 
          setTaskState={setAllTaskState} taskCreate={{addTask, setAddTask}}  alertWindowsStates={{alertMsgRef, setAlertWindow}} 
          taskErase={{ eraseTaskState, setEraseTaskState, taskToErase, 
          eraseTask:(id)=> eraseTask(id, setAllTaskState),
          reduceTimes:(id)=>reduceTimes(id, setAllTaskState, setActualXP)}}/>

        <TaskAccordion {...{nightMode}} title={homeJson.dailyTask[lang]} user={{lang, setEraseWindow}} taskState={dailyTaskState} 
          setTaskState={setDailyTaskState} taskCreate={{addTask, setAddTask}}  alertWindowsStates={{alertMsgRef, setAlertWindow}}
          taskErase={{eraseTaskState, setEraseTaskState, taskToErase, 
          eraseTask:(id)=> eraseTask(id, setDailyTaskState),
          reduceTimes:(id)=>reduceTimes(id, setDailyTaskState, setActualXP)}} recurrent={recurrent}/>

        <TaskAccordion {...{nightMode}} title={homeJson.weeklyTask[lang]} user={{lang, setEraseWindow}} taskState={weeklyTaskState} 
          setTaskState={setWeeklyTaskState} taskCreate={{addTask, setAddTask}}  alertWindowsStates={{alertMsgRef, setAlertWindow}}
          taskErase={{eraseTaskState, setEraseTaskState, taskToErase, 
          eraseTask:(id)=> eraseTask(id, setWeeklyTaskState),
          reduceTimes:(id)=>reduceTimes(id, setWeeklyTaskState, setActualXP)}} recurrent={recurrent}/>

    </main>
          
  ) 
}

export default Home