import TaskDiv from "./TaskDiv"
import XBtn from "../Options/XBtn"
import { homeJson } from "../Json/HomeJson"
import type { newTaskInterface, eraseWindowInterface, Lang, ReactStateBool } from "../Functions, states & interfaces/Types&Interfaces" 
import { useEffect } from "react"

function TaskToDo({lang, object, reduceTimes, eraseTask, setEraseWindow, eraseTaskState, setEraseTaskState, taskToErase}:
  {lang:Lang, object : newTaskInterface, reduceTimes:(id:number)=>void, eraseTask:(id:number)=>void, taskToErase: React.RefObject<number | null> 
  setEraseWindow: ReactStateBool} & eraseWindowInterface ) {

    useEffect(()=>{if (eraseTaskState && taskToErase.current === object.id) {
      eraseTask(object.id);
      setEraseTaskState?.(false);
      taskToErase.current = null;
    }
    }, [eraseTaskState])


  return (
    <section className="size-full flex flex-col justify-center gap-5 px-5 py-3 text-center text-xl">

      <XBtn onclick={()=>{
        setEraseWindow(true);
        taskToErase.current = object.id
      }} />

        <TaskDiv title={homeJson.task[lang]} divClass="flex flex-col gap-1 text-2xl" 
      children={object.task} />
      
      <TaskDiv title={homeJson.times[lang]} divClass="flex flex-row self-center gap-2" 
      children={object.times} />

      <TaskDiv title={homeJson.difficult[lang]} divClass="flex flex-row self-center gap-2" 
      children={object.difficult} />

      <TaskDiv title={homeJson.exp[lang]} divClass="flex flex-row self-center gap-2" 
      children={<h3>{object.exp} <span className="text-blue-500 font-bold">XP</span></h3>} />

      <button className="border-1 border-black p-1 bg-green-300 cursor-pointer mx-10" 
      onClick={()=>reduceTimes(object.id)}>
        {homeJson.complete[lang]}</button>
    </section>
  )
}

export default TaskToDo