import type { Dispatch, SetStateAction } from "react"

function AddTaskBtn({setAddTask}:{setAddTask: Dispatch<SetStateAction<boolean>>}) {
  return (
    <button onClick={()=> setAddTask(true)} className="bg-blue-200 flex align-center justify-center cursor-pointer">
        <img className="size-24 border-3 bg-blue-300" src="/svg/plus.svg" alt="Plus image" />
    </button>
  )
}

export default AddTaskBtn