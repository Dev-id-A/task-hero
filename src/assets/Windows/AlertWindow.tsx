import type { Lang } from "../Types&Interfaces"
import { alertJson } from "../Json/AlertsJson"

function AlertWindow({lang}:{lang:Lang}) {
  return (
    <section className="h-screen absolute flex items-center justify-center px-5">
      <div className="h-50 bg-blue-200 border-1 flex flex-col items-center justify-center gap-5 font-bold">
        <h2 className="text-xl text-center">{alertJson.eraseTask[lang]}</h2>

        <div className="flex flex-col w-1/2 gap-1">
            <button className="border-1 bg-green-500 w-full">{alertJson.yes[lang]}</button>
            <button className="border-1 bg-red-500 w-full">{alertJson.no[lang]}</button>
        </div>
        
      </div>
    </section>
    
  )
}

export default AlertWindow