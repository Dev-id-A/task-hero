function AddTaskBtn({addTaskFun}:{addTaskFun:()=>void}) {
  return (
    <button onClick={()=> addTaskFun()} className="flex align-center justify-center cursor-pointer">
        <img className="size-24 border-3 bg-blue-300" src="/svg/plus.svg" alt="Plus image" />
    </button>
  )
}

export default AddTaskBtn