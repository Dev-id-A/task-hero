import { titlesJson } from "../Json/AlertsJson";
import XPBar from "../XPBar/XPBar";
import NightModeBtn from "../Options/NightModeBtn";
import Menu from "../Options/Menu";
import type { NavbarInterface } from "../Functions, states & interfaces/Types&Interfaces";



export default function Navbar({user, title, levelOptions, menu, night}:NavbarInterface) {
    const {lang, username} = user;
    const {showTitle, setShowTitle} = title;
    const {level, percentage, eraseXPBar} = levelOptions;
    const {openMenu, setOpenMenu} = menu;
    const {nightMode, setNightMode} = night;

  return (
              <section className="min-h-10 text-center bg-blue-500 text-3xl w-full flex flex-row border-t-1 border-blue-600">

            <div className="w-full flex flex-row items-center px-2" onClick={()=> setShowTitle(prev=> !prev)}>
            {showTitle ? 
            (<h1 className="text-center w-full text-2xl font-bold">{titlesJson[level- 1][lang]}</h1>):
            (<>
              <h1 className="min-w-25">LVL {level}</h1>
              <XPBar {...{percentage, eraseXPBar}}/>
            </>)
            }
            </div>

            <Menu {...{lang, username, openMenu, setOpenMenu}} 
            children={<>
              <NightModeBtn {...{nightMode, setNightMode}}/>
              {/*Testing the page only*/}
              <button onClick={()=>localStorage.clear()}>Borrar</button>
              <button onClick={()=>{
                localStorage.removeItem("level");
                localStorage.removeItem("actualXP");
                localStorage.removeItem("maxXP");
                }}>Borrar nivel</button>
              </>}/>

            <button className="h-10 w-18" onClick={()=>setOpenMenu(true)}>
              <img src="/svg/hamburger.svg" alt="Hamburger icon" className="h-full w-full"/>
            </button>

          </section>
  )
}
