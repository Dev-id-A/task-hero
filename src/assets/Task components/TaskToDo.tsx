import TaskDiv from "./TaskDiv"
import { homeJson } from "../Json/HomeJson"
import type { newTaskInterface } from "../../pages/Home"
import type { Lang } from "../../App"

function TaskToDo({lang, object, reduceTimes}:{lang:Lang, object : newTaskInterface, reduceTimes:(id:number)=>void}) {

  return (
    <div className="size-full flex flex-col justify-center gap-10 px-5 text-center text-2xl">
        <TaskDiv title={homeJson.task[lang]} divClass="flex flex-col gap-1" 
      children={object.task} />
      
      <TaskDiv title={homeJson.times[lang]} divClass="flex flex-row self-center gap-2" 
      children={object.times} />

      <TaskDiv title={homeJson.difficult[lang]} divClass="flex flex-row self-center gap-2" 
      children={object.difficult} />

      <button className="border-1 p-1 bg-green-300 cursor-pointer mx-10" 
      onClick={()=>reduceTimes(object.id)}>
        {homeJson.complete[lang]}</button>
    </div>
  )
}

export default TaskToDo