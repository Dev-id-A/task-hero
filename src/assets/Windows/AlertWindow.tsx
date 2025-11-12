import type { alertWindowInterface } from "../Functions, states & interfaces/Types&Interfaces"

function AlertWindow({alertMsgRef, alertWindow, setAlertWindow}: alertWindowInterface) {
  return (
    <section className={`fixed inset-0 z-50 flex items-center justify-center px-5 bg-black/50 backdrop-blur ${!alertWindow && "hidden"}`}>
        <div className="h-50 p-10 bg-blue-200 border-1 border-black flex flex-col items-center justify-center gap-10 font-bold">
            <h2>
                {alertMsgRef.current}
            </h2>
            <button className="border-1 border-black bg-green-500 w-full" onClick={()=>setAlertWindow(false)}>Ok</button>
        </div>
    </section>
  )
}

export default AlertWindow