import type { nightModeInterface } from "../Functions, states & interfaces/Types&Interfaces" 

function NightModeBtn({nightMode, setNightMode}: nightModeInterface) {
  return (
    <button id="change-language" className="h-10 w-20 md:h-15 md:w-30 rounded-full bg-gray-600 px-3 cursor-pointer"
    onClick={()=>{
      const actualMode = !nightMode
      localStorage.setItem("mode", String(actualMode))
      setNightMode?.(actualMode)
      }} >
            <div className="h-8 w-16 md:h-12 md:w-24 rounded-full bg-gray-400">
                <div className={`text-lg border-black size-8 md:size-12 rounded-full transition-all duration-300 ease-in-out 
                  ${nightMode ? "translate-x-12 bg-blue-700":"translate-x-0 bg-blue-300"}`}>
                    <img src={`${nightMode ? "/svg/moon.svg":"/svg/sun.svg"}`} alt="Sun or moon" />
                </div>
            </div>
        </button>
  )
}

export default NightModeBtn