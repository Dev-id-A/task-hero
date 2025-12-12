import type { Dispatch, SetStateAction } from "react"

function AddTaskBtn({nightMode, setAddTask}:{nightMode: boolean, setAddTask: Dispatch<SetStateAction<boolean>>}) {
  return (
    <button onClick={()=> setAddTask(true)} className="flex align-center justify-center cursor-pointer">
        <img 
        
        className={`size-24 border-3 border-black ${nightMode ? "bg-[#1F1F1F]":"bg-blue-300"}`} src="/svg/plus.svg" alt="Plus image" />
    </button>
  )
}

export default AddTaskBtn