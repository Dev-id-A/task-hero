import type { alertWindowInterface } from "../Functions, states & interfaces/Types&Interfaces"

function AlertWindow({nightMode, alertMsgRef, alertWindow, setAlertWindow}: alertWindowInterface) {
  return (
    <section className={`fixed inset-0 z-50 flex items-center justify-center px-5 bg-black/50 backdrop-blur ${!alertWindow && "hidden"}`}>
        <div className={`h-50 p-10 border-1 border-black flex flex-col items-center justify-center gap-10 font-bold
          ${nightMode ? "bg-[#36648B]":"bg-[#63B8FF]"}`}>
            <h2>
                {alertMsgRef.current}
            </h2>
            <button className={`border-1 border-black w-full ${nightMode ? "bg-green-700":"bg-green-500"}`} 
            onClick={()=>setAlertWindow(false)}>Ok</button>
        </div>
    </section>
  )
}

export default AlertWindow