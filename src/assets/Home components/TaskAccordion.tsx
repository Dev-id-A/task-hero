import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"
import type { accordionInterface, alertWindowInterface, newTaskInterface } from "../Functions, states & interfaces/Types&Interfaces"
import TaskToDo from "../Task components/TaskToDo"
import TaskInput from "../Task components/TaskInput"
import AddTaskBtn from "../Task components/AddTaskBtn"
import type { Dispatch, RefObject, SetStateAction } from "react"
import {easeIn, motion} from "framer-motion"


function TaskAccordion({title, user, taskCreate, taskErase, taskState, setTaskState, recurrent, alertWindowsStates}:
  {title:string, taskState: newTaskInterface[], setTaskState: Dispatch<SetStateAction<newTaskInterface[]>>, recurrent?: RefObject<boolean>,
    alertWindowsStates: alertWindowInterface
  } & accordionInterface) {
  const {lang, setEraseWindow} = user;
  const {addTask, setAddTask,} = taskCreate;
  const {eraseTask, eraseTaskState, setEraseTaskState, taskToErase, reduceTimes} = taskErase;

  return (
    <Accordion type="single" collapsible>
        <AccordionItem value="tasks" >
            <AccordionTrigger className="w-full justify-center text-2xl font-bold border-y-1 border-black rounded-none
            [&>svg]:size-8 [&>svg]:duration-500 [&>svg]:text-black">
              {title}</AccordionTrigger>
            <AccordionContent>
              <section 
              
              className="md:grid md:grid-cols-2 lg:grid-cols-3">
                {taskState.map((object, i)=>{
                  return <motion.div 
                  initial={{scale: 0}}
                  animate={{scale: 1}}
                  style={{originX: 0.5, originY: 0.5}}
                  transition={{
                    duration: 0.5,
                    ease: easeIn
                  }}
                  key={i + "div"} className={`bg-blue-200 min-h-100 flex flex-col items-center justify-center border-3 border-black m-8
                  ${object.completed && "hidden"}`}>
                      <TaskToDo key={i} 
                      {...{lang, object, reduceTimes, eraseTask, setEraseWindow,
                      eraseTaskState, setEraseTaskState, taskToErase}} />
                    </motion.div>
                })}
      
                <motion.div
                  initial={{scale: 0}}
                  animate={{scale: 1}}
                  style={{originX: 0.5, originY: 0.5}}
                  transition={{
                    duration: 0.5,
                    ease: easeIn
                  }}
                className="bg-blue-200 min-h-100 flex flex-col items-center justify-center border-3 border-black m-8">
                  {addTask ?
                  (<TaskInput {...{lang, taskState, setTaskState, setAddTask, recurrent, alertWindowsStates}}/>):
                  (<AddTaskBtn {...{addTask, setAddTask}}/>)}
                </motion.div>
              </section>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
  )
}

export default TaskAccordion