function XPBar({percentage, eraseXPBar}: {percentage: number, eraseXPBar: boolean}) {

  return (
    <div className="h-10 w-full flex justify-center items-center px-5">
        <div className="h-3 w-full bg-green-500 rounded-xl overflow-hidden">
            <div className={`h-full bg-blue-100 rounded-xl transition-[width] duration-800 ${eraseXPBar && "opacity-0"}`} 
            style={{width: `${percentage}%`}}></div>
        </div>
    </div>
  )
}

export default XPBar