import TaskDiv from "./TaskDiv"
import { homeJson } from "../Json/HomeJson"
import type { Lang } from "../../App"

function TaskToDo({lang}:{lang:Lang}) {
  return (
    <div className="size-full flex flex-col -center justify-center gap-10 px-5 text-center text-2xl">
        <TaskDiv title={homeJson.task[lang]} divClass="flex flex-col gap-1" 
      children={"Saludar"} />
      
      <TaskDiv title={homeJson.times[lang]} divClass="flex flex-row self-center gap-2" 
      children={1} />

      <TaskDiv title={homeJson.difficult[lang]} divClass="flex flex-row self-center gap-2" 
      children={"Fácil"} />

      <button className="border-1 p-1 bg-green-300 cursor-pointer mx-10">{homeJson.complete[lang]}</button>
    </div>
  )
}

export default TaskToDo