import type { nightModeInterface } from "../Types&Interfaces" 

function NightModeBtn({nightMode, setNightMode}: nightModeInterface) {
  return (
    <button id="change-language" onClick={()=>setNightMode?.(!nightMode)} className="h-15 w-30 rounded-full bg-gray-600 px-3 cursor-pointer">
            <div className="h-12 w-24 rounded-full bg-gray-400">
                <div className={`text-lg border-black size-12 rounded-full transition-all duration-300 ease-in-out 
                  ${nightMode ? "translate-x-12 bg-blue-700":"translate-x-0 bg-blue-300"}`}>
                    <img src={`${nightMode ? "/svg/moon.svg":"/svg/sun.svg"}`} alt="Sun or moon" />
                </div>
            </div>
        </button>
  )
}

export default NightModeBtn