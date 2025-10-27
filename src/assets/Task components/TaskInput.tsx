import { useState, type Dispatch, type SetStateAction } from "react"
import type { Lang } from "../Types&Interfaces" 
import { homeJson, difficults } from "../Json/HomeJson"
import TaskDiv from "./TaskDiv"
import type { newTaskInterface } from "../../pages/Home"
import XBtn from "../Options/XBtn"

function TaskInput({lang, allTaskState, setAllTaskState, setAddTask }:
  {lang:Lang , allTaskState:newTaskInterface[], 
    setAllTaskState:Dispatch<SetStateAction<newTaskInterface[]>>, setAddTask: Dispatch<SetStateAction<boolean>>}) {

  const [times, setTimes] = useState<number>(1)
  const [currentTask, setCurrentTask] = useState<newTaskInterface>({
    task: "",
    times: 1,
    difficult: difficults[0].en,
    id: Date.now()
  });

  const experience = {
    "very easy": 10,
    "easy": 25,
    "normal": 50,
    "hard": 100,
    "very hard": 150
  };

  const createTask = () => {
    if(currentTask.task == ""){
      alert(homeJson.taskAlert[lang])
      return;
    }
    setAllTaskState([...allTaskState, currentTask]);
    setCurrentTask({
      task: "",
      times: 1,
      difficult: difficults[0][lang],
      id: Date.now()
    })
    setAddTask(false);
  }

  const alertInput = (e : number) =>{
    if (e > 1000 || e < 1){
      alert(homeJson.alert[lang])
      return;
    }
      setTimes(e)
      setCurrentTask({...currentTask, times: e})

  }

  return (
    <div className="size-full flex flex-col justify-center gap-5 px-5 text-center text-xl">

      <div className="flex justify-end">
        <XBtn onclick={()=> setAddTask(false)}/>
      </div>

      <h2 className="text-3xl">{homeJson.addTask[lang]}</h2>

      <TaskDiv title={homeJson.task[lang]} divClass="flex flex-col gap-1" 
      children={<input className="w-full border-1 rounded-sm" type="text" placeholder={homeJson.taskExample[lang]} 
      onChange={(e)=>setCurrentTask({...currentTask, task: e.target.value}) } />} />
      
      <TaskDiv title={homeJson.times[lang]} divClass="flex flex-row self-center gap-2" 
      children={<input className="w-1/3 h-fit border-1 rounded-sm" type="number" min={1} max={1000} step={1} value={times}
      onChange={(e)=> alertInput(Number(e.target.value))} />} />

      <TaskDiv title={homeJson.difficult[lang]} divClass="flex flex-row items-center gap-1" 
      children={<select className="w-full text-center" name="difficult" id="select-difficult" 
      onChange={(e)=>setCurrentTask({...currentTask, difficult: e.target.value}) }>
          {difficults.map((mode)=>{
            return <option key={mode.en} value={mode.en}>{mode[lang]}</option>
          })}
        </select>} />

      <TaskDiv title={homeJson.exp[lang]} divClass="flex flex-row items-center gap-1" 
      children={<h3>{experience[currentTask.difficult.toLowerCase() as keyof typeof experience]} XP</h3>}/>

      <button className="border-1 p-1 bg-green-300 cursor-pointer mx-10" onClick={()=> createTask()}>{homeJson.add[lang]}</button>
    </div>
  )
}

export default TaskInput