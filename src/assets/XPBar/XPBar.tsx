function XPBar({percentage}: {percentage: number}) {

  return (
    <div className="h-10 w-full flex justify-center items-center px-5">
        <div className="h-1 w-full bg-green-500 rounded-xl">
            <div className={`h-full bg-blue-100 transition-all duration-1000`} style={{width: `${percentage}%`}}></div>
        </div>
    </div>
  )
}

export default XPBar