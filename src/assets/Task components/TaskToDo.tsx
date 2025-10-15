import TaskDiv from "./TaskDiv"
import { homeJson } from "../Json/HomeJson"
import type { taskInterface } from "../../pages/Home"

function TaskToDo({lang,taskInput, timesInput, difficult}:taskInterface) {
  return (
    <div className="size-full flex flex-col justify-center gap-10 px-5 text-center text-2xl">
        <TaskDiv title={homeJson.task[lang]} divClass="flex flex-col gap-1" 
      children={taskInput} />
      
      <TaskDiv title={homeJson.times[lang]} divClass="flex flex-row self-center gap-2" 
      children={timesInput} />

      <TaskDiv title={homeJson.difficult[lang]} divClass="flex flex-row self-center gap-2" 
      children={difficult} />

      <button className="border-1 p-1 bg-green-300 cursor-pointer mx-10">{homeJson.complete[lang]}</button>
    </div>
  )
}

export default TaskToDo