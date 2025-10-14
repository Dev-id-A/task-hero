import { homeJson } from "./Json/HomeJson"
import type { Lang } from "../App"

function TaskInput({lang}:
  {lang:Lang}) {
  return (
    <div className="size-full flex flex-col -center justify-center gap-15 px-2 text-center text-xl">
      <h2>{homeJson.addTask[lang]}</h2>

      <div className="flex flex-col gap-1">
        <h3>{homeJson.task[lang]}</h3>
        <input className="w-full border-1 rounded-sm" type="text" placeholder={homeJson.taskExample[lang]}/>
      </div>
      
      <div className="flex flex-row self-center gap-1">
        <h3>{homeJson.times[lang]}</h3>
        <input className="w-8 border-1 rounded-sm" type="number" min={1} step={1} />
      </div>

      <button className="border-1 p-1 bg-green-300 cursor-pointer mx-10">{homeJson.complete[lang]}</button>
    </div>
  )
}

export default TaskInput