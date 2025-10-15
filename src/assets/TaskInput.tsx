import { homeJson } from "./Json/HomeJson"
import type { Lang } from "../App"

function TaskInput({lang}:
  {lang:Lang}) {
  return (
    <div className="size-full flex flex-col -center justify-center gap-8 px-5 text-center text-2xl">
      <h2 className="text-3xl">{homeJson.addTask[lang]}</h2>

      <div className="flex flex-col gap-1">
        <h3>{homeJson.task[lang]}</h3>
        <input className="w-full border-1 rounded-sm" type="text" placeholder={homeJson.taskExample[lang]}/>
      </div>
      
      <div className="flex flex-row self-center gap-1">
        <h3>{homeJson.times[lang]}</h3>
        <input className="w-1/2 h-fit border-1 rounded-sm" type="number" min={1} max={1000} step={1} />
      </div>

      <div className="flex flex-row items-center gap-1">
        <h3>{homeJson.difficult[lang]}</h3>
        <select className="w-full text-center" name="difficult" id="select-difficult">
          <option value="very easy">{homeJson.veryEasy[lang]}</option>
          <option value="easy">{homeJson.easy[lang]}</option>
          <option value="normal">{homeJson.normal[lang]}</option>
          <option value="hard">{homeJson.hard[lang]}</option>
          <option value="very hard">{homeJson.veryHard[lang]}</option>
        </select>
      </div>

      <button className="border-1 p-1 bg-green-300 cursor-pointer mx-10">{homeJson.add[lang]}</button>
    </div>
  )
}

export default TaskInput