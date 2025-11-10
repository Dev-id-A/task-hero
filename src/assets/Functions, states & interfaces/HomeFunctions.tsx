import type { Dispatch, SetStateAction } from "react";
import type { Lang, newTaskInterface, ReactStateBool, ReactStateNumber } from "./Types&Interfaces";

  export const getLang = (setLang?: Dispatch<SetStateAction<Lang>>) =>{
          const actualLanguage = localStorage.getItem("lang");
    
            (actualLanguage == "es" || actualLanguage == "en" && setLang?.(actualLanguage))
      }
   

  export const eraseTask = (id: number, taskState: Dispatch<SetStateAction<newTaskInterface[]>>) => taskState((prev)=> prev.filter((task)=> task.id !== id));

  export const reduceTimes = (id:number, taskState: Dispatch<SetStateAction<newTaskInterface[]>>, setActualXP: Dispatch<SetStateAction<number>>) => {
    let obtainedExp = 0;
    taskState(prev=>{
      const taskToComplete = prev.map(task=>{

        if (task.id === id){

          if(task.times > 1){
            return{...task, times: task.times-1}
          }
          if("completed" in task){
            obtainedExp = task.exp;
            return {...task, completed: true}
          }
          obtainedExp = task.exp;
          return null;

        }
        return task;
        
      }).filter(Boolean) as newTaskInterface[];

      if(obtainedExp){
        setActualXP(prevXP=> prevXP + obtainedExp);
      }

      return taskToComplete;
    })
  }

  export const saveLevelAndXP = (level: number, actualXP: number, maxXP: number) =>{
        localStorage.setItem("level", String(level));
        localStorage.setItem("actualXP", String(actualXP));
        localStorage.setItem("maxXP", String(maxXP));
  }

  export const animationXPBar = (actualXP:number, maxXP:number, setEraseXPBar: ReactStateBool, setLevelUpWindow: ReactStateBool, 
    setPercentage: ReactStateNumber, setLevel: ReactStateNumber, setActualXP: ReactStateNumber, setMaxXP: ReactStateNumber) =>{
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
          setMaxXP(prev => Math.ceil(prev + 50));
          setPercentage(actualXP / maxXP * 100);
            setTimeout(()=>setLevelUpWindow(true),500)
      },1600)


      return ()=>{
        clearTimeout(eraseBar);
        clearTimeout(continueBar);
      }
    }
    setPercentage(actualXP / maxXP * 100);

  }

  export const resetRecurrentTask =(taskState: Dispatch<SetStateAction<newTaskInterface[]>>, weekly: boolean ) =>{
    {
    const lastDay = localStorage.getItem("lastDay");
    const today = new Date();
    const todayString = today.toDateString();
    const monday = today.getDay() === 1; 

    if(lastDay !== todayString){

      if(!weekly){
        taskState(prev=> prev.map(task=> ({...task, completed: false})))
        localStorage.setItem("lastDay", todayString);
        return;
      }
      
      if(weekly && monday){
        const a=localStorage.getItem("lastDay");

        console.log(a)
        taskState(prev=> prev.map(task=> ({...task, completed: false})))
        localStorage.setItem("lastDay", todayString);
        return;}
    }
  }
  }