import type { levelUpWindowInterface } from "../Types&Interfaces"

function LevelUpWindow({levelUpWindow, setLevelUpWindow}: levelUpWindowInterface) {
  
  return (
    <section className={`fixed inset-0 z-50 flex items-center justify-center px-5 bg-black/50 backdrop-blur
    ${!levelUpWindow && "hidden"}`}>
      <div className="h-50 bg-yellow-200 border-1 flex flex-col items-center justify-center gap-5 font-bold px-5">
        <h3 className="text-xl text-center">Congratulations you level up to:</h3>
        <h2 className="text-xl text-center">Task hero</h2>

        <div className="flex flex-col w-1/2 gap-1">
            <button className="border-1 bg-green-500 w-full" onClick={()=>setLevelUpWindow(false)}>Ok</button>
        </div>
        
      </div>
    </section>
    
  )
}

export default LevelUpWindow