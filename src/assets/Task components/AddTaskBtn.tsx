import type { Dispatch, SetStateAction } from "react"
import {easeIn, motion} from "framer-motion"

function AddTaskBtn({setAddTask}:{setAddTask: Dispatch<SetStateAction<boolean>>}) {
  return (
    <button onClick={()=> setAddTask(true)} className="bg-blue-200 flex align-center justify-center cursor-pointer">
        <motion.img 
        initial={{rotate: 0}}
        animate={{rotate: 180}}
        transition={{
          duration: 2,
          ease: easeIn
        }}
        exit={{rotate: 0}}
        className="size-24 border-3 border-black bg-blue-300" src="/svg/plus.svg" alt="Plus image" />
    </button>
  )
}

export default AddTaskBtn