import type { Lang, levelUpWindowInterface } from "../Functions, states & interfaces/Types&Interfaces";
import { congratulations, titlesJson } from "../Json/AlertsJson";

function LevelUpWindow({nightMode, lang, level, levelUpWindow, setLevelUpWindow}: {nightMode:boolean,lang:Lang, level:number} 
  & levelUpWindowInterface) {
  
  return (
    <section className={`fixed inset-0 z-50 flex items-center justify-center px-5 bg-black/50 backdrop-blur
    ${!levelUpWindow && "hidden"}`}>
      <div className={`h-50 lg:h-60 xl:h-70 border-1 border-black flex flex-col items-center justify-center gap-5 lg:gap-10 font-bold 
      px-5 lg:px-10 xl:px-15
        ${nightMode ? "bg-[#CDAD00]":"bg-[#EEC900]" }`}>
        <h3 className="text-xl text-center">{congratulations[lang]}</h3>
        <h2 className="text-xl text-center">{titlesJson[level-1][lang]}</h2>

        <div className="flex flex-col w-1/2 gap-1">
            <button className={`border-1 border-black w-full xl:h-8
              ${nightMode ? "bg-green-700":"bg-green-500"}`} onClick={()=>setLevelUpWindow(false)}>Ok</button>
        </div>
        
      </div>
    </section>
    
  )
}

export default LevelUpWindow