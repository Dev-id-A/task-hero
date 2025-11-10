import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"
import type { accordionInterface, newTaskInterface } from "../Functions, states & interfaces/Types&Interfaces"
import TaskToDo from "../Task components/TaskToDo"
import TaskInput from "../Task components/TaskInput"
import AddTaskBtn from "../Task components/AddTaskBtn"
import type { Dispatch, RefObject, SetStateAction } from "react"

function TaskAccordion({title, user, taskCreate, taskErase, taskState, setTaskState, recurrent}:
  {title:string, taskState: newTaskInterface[], setTaskState: Dispatch<SetStateAction<newTaskInterface[]>>, recurrent?: RefObject<boolean>} 
  & accordionInterface) {
  const {lang, setAlertWindow} = user;
  const {addTask, setAddTask,} = taskCreate;
  const {eraseTask, eraseTaskState, setEraseTaskState, taskToErase, reduceTimes} = taskErase;

  return (
    <Accordion type="single" collapsible>
        <AccordionItem value="tasks" >
            <AccordionTrigger className="w-full justify-center text-2xl font-bold border-y-1 border-black rounded-none
            [&>svg]:size-8 [&>svg]:duration-500 [&>svg]:text-black">
              {title}</AccordionTrigger>
            <AccordionContent>
              {taskState.map((object, i)=>{
                return <section key={i + "section"} className={`bg-blue-200 min-h-100 flex flex-col items-center justify-center border-3 border-black m-8
                ${object.completed && "hidden"}`}>
                    <TaskToDo key={i} 
                    {...{lang, object, reduceTimes, eraseTask, setAlertWindow, eraseTaskState, setEraseTaskState, taskToErase}} />
                  </section>
              })}
     
              <section className="bg-blue-200 min-h-100 flex flex-col items-center justify-center border-3 border-black m-8">
                {addTask ?
                (<TaskInput {...{lang, taskState, setTaskState, setAddTask, recurrent}}/>):
                (<AddTaskBtn {...{addTask, setAddTask}}/>)}
              </section>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
  )
}

export default TaskAccordion