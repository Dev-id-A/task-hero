import type { Lang } from "../Types&Interfaces"
import { alertJson } from "../Json/AlertsJson"
import type { alertWindowInterface } from "../Types&Interfaces"

function AlertWindow({lang, alertWindow, setAlertWindow, setEraseTaskState}: {lang:Lang} & alertWindowInterface) {

  
  return (
    <section className={`fixed inset-0 z-50 flex items-center justify-center px-5 bg-black/50 backdrop-blur
    ${!alertWindow && "hidden"}`}>
      <div className="h-50 bg-blue-200 border-1 flex flex-col items-center justify-center gap-5 font-bold">
        <h2 className="text-xl text-center">{alertJson.eraseTask[lang]}</h2>

        <div className="flex flex-col w-1/2 gap-1">
            <button className="border-1 bg-green-500 w-full" onClick={()=> {setEraseTaskState(true); setAlertWindow(false)}}>{alertJson.yes[lang]}</button>
            <button className="border-1 bg-red-500 w-full" onClick={()=> setAlertWindow(false)}>{alertJson.no[lang]}</button>
        </div>
        
      </div>
    </section>
    
  )
}

export default AlertWindow