import type { Dispatch, SetStateAction } from "react";
import type { newTaskInterface, ReactStateBool, ReactStateNumber } from "./Types&Interfaces";
  
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


  }