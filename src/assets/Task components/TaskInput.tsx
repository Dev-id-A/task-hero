import type { Dispatch, SetStateAction } from "react"
import type { Lang } from "../../App"
import { homeJson, difficults } from "../Json/HomeJson"
import TaskDiv from "./TaskDiv"
import type { newTaskInterface } from "../../pages/Home"

function TaskInput({lang, setAllTaskState }:{lang:Lang ,setAllTaskState:Dispatch<SetStateAction<newTaskInterface[]>>}) {

  // const alertInput = (e : number) =>{
  //   if (e > 1000 || e < 1){
  //     alert(homeJson.alert[lang])
  //   } else{
  //     setAllTaskState[1].times(e)
  //   }
  // }

  return (
    <div className="size-full flex flex-col -center justify-center gap-8 px-5 text-center text-xl">
      <h2 className="text-3xl">{homeJson.addTask[lang]}</h2>

      <TaskDiv title={homeJson.task[lang]} divClass="flex flex-col gap-1" 
      children={<input className="w-full border-1 rounded-sm" type="text" placeholder={homeJson.taskExample[lang]} />} />
      
      <TaskDiv title={homeJson.times[lang]} divClass="flex flex-row self-center gap-2" 
      children={<input className="w-1/3 h-fit border-1 rounded-sm" type="number" min={1} max={1000} step={1}  />} />

      <TaskDiv title={homeJson.difficult[lang]} divClass="flex flex-row items-center gap-1" 
      children={<select className="w-full text-center" name="difficult" id="select-difficult">
          {difficults.map((mode)=>{
            return <option key={mode[lang]} value={mode[lang]}>{mode[lang]}</option>
          })}
        </select>} />

      <button className="border-1 p-1 bg-green-300 cursor-pointer mx-10">{homeJson.add[lang]}</button>
    </div>
  )
}

export default TaskInput