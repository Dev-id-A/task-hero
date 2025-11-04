import type { Lang, levelUpWindowInterface } from "../Types&Interfaces";
import { congratulations, titlesJson } from "../Json/AlertsJson";

function LevelUpWindow({lang, level, levelUpWindow, setLevelUpWindow}: {lang:Lang, level:number} & levelUpWindowInterface) {
  
  return (
    <section className={`fixed inset-0 z-50 flex items-center justify-center px-5 bg-black/50 backdrop-blur
    ${!levelUpWindow && "hidden"}`}>
      <div className="h-50 bg-yellow-200 border-1 border-black flex flex-col items-center justify-center gap-5 font-bold px-5">
        <h3 className="text-xl text-center">{congratulations[lang]}</h3>
        <h2 className="text-xl text-center">{titlesJson[level-1][lang]}</h2>

        <div className="flex flex-col w-1/2 gap-1">
            <button className="border-1 border-black bg-green-500 w-full" onClick={()=>setLevelUpWindow(false)}>Ok</button>
        </div>
        
      </div>
    </section>
    
  )
}

export default LevelUpWindow