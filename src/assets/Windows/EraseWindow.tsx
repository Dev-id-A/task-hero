import type { Lang } from "../Functions, states & interfaces/Types&Interfaces"
import { alertJson } from "../Json/AlertsJson"
import type { eraseWindowInterface } from "../Functions, states & interfaces/Types&Interfaces"
import { useEffect } from "react"

function EraseWindow({nightMode, lang, windowBool, windowBoolSetter, eraserFnc, alertText}: {nightMode: boolean, lang:Lang}
   & eraseWindowInterface) {

  useEffect(()=>{
    if(windowBool){
      document.body.style.overflow = "hidden";
    } else{
      document.body.style.overflow = "";
    }
    return()=> {document.body.style.overflow = "";}
  }
  ,[windowBool])
  
  return (
    <section className={`fixed inset-0 z-150 flex items-center justify-center px-5 bg-black/50 backdrop-blur
    ${!windowBool && "hidden"}`}>
      <div className={`h-50 p-10  border-1 border-black flex flex-col items-center justify-center gap-5 font-bold
         ${nightMode ? "bg-[#36648B]":"bg-[#63B8FF]"}`}>
        <h2 className="text-xl text-center">{alertText}</h2>

        <div className="flex flex-col w-1/2 gap-1">
            <button className={`border-1 border-black w-full ${nightMode ? "bg-green-700":"bg-green-200"}`} 
              onClick={()=> {eraserFnc?.(true); windowBoolSetter?.(false)}}>{alertJson.yes[lang]}</button>
            <button className={`border-1 border-black w-full ${nightMode ? "bg-red-800":"bg-gred-500"}`}  
              onClick={()=> windowBoolSetter?.(false)}>{alertJson.no[lang]}</button>
        </div>
        
      </div>
    </section>
    
  )
}

export default EraseWindow