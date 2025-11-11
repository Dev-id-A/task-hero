import type { ReactNode } from "react"
import type { ReactStateBool } from "../Functions, states & interfaces/Types&Interfaces"

function AlertWindow({children, alertWindow, setAlertWindow}: {children: ReactNode, alertWindow: boolean, setAlertWindow: ReactStateBool}) {
  return (
    <section className={`fixed inset-0 z-50 flex items-center justify-center px-5 bg-black/50 backdrop-blur ${!alertWindow && "hidden"}`}>
        <div className="h-50 p-10 bg-blue-200 border-1 border-black flex flex-col items-center justify-center gap-10 font-bold">
            <h2>
                {children}
            </h2>
            <button className="border-1 border-black bg-green-500 w-full" onClick={()=>setAlertWindow(false)}>Ok</button>
        </div>
    </section>
  )
}

export default AlertWindow