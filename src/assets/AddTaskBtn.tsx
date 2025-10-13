function AddTaskBtn({addTask, addTaskFun}:
    {addTask: boolean, addTaskFun:()=>void}) {
  return (
    <button onClick={()=> addTaskFun()} className="flex align-center justify-center cursor-pointer">
        {addTask ?
        (<div>TaskInput</div>):
        (<img className="size-24 border-3 bg-blue-300" src="/svg/plus.svg" alt="Plus image" />)
        }
    </button>
  )
}

export default AddTaskBtn