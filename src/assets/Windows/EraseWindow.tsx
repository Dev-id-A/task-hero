import type { Lang } from "../Functions, states & interfaces/Types&Interfaces"
import { alertJson } from "../Json/AlertsJson"
import type { eraseWindowInterface } from "../Functions, states & interfaces/Types&Interfaces"
import { useEffect } from "react"

function EraseWindow({lang, eraseWindow, setEraseWindow, eraserFnc, alertText}: {lang:Lang} & eraseWindowInterface) {

  useEffect(()=>{
    if(eraseWindow){
      document.body.style.overflow = "hidden";
    } else{
      document.body.style.overflow = "";
    }
    return()=> {document.body.style.overflow = "";}
  }
  ,[eraseWindow])
  
  return (
    <section className={`fixed inset-0 z-50 flex items-center justify-center px-5 bg-black/50 backdrop-blur
    ${!eraseWindow && "hidden"}`}>
      <div className="h-50 p-10 bg-blue-200 border-1 border-black flex flex-col items-center justify-center gap-5 font-bold">
        <h2 className="text-xl text-center">{alertText}</h2>

        <div className="flex flex-col w-1/2 gap-1">
            <button className="border-1 border-black bg-green-500 w-full" onClick={()=> {eraserFnc(true); setEraseWindow(false)}}>{alertJson.yes[lang]}</button>
            <button className="border-1 border-black bg-red-500 w-full" onClick={()=> setEraseWindow(false)}>{alertJson.no[lang]}</button>
        </div>
        
      </div>
    </section>
    
  )
}

export default EraseWindow