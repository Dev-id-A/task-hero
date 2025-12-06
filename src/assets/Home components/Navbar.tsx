import { titlesJson } from "../Json/AlertsJson";
import XPBar from "../XPBar/XPBar";
import NightModeBtn from "../Options/NightModeBtn";
import Menu from "../Options/Menu";
import type { NavbarInterface, Lang, eraseWindowInterface } from "../Functions, states & interfaces/Types&Interfaces";
import { homeJson } from "../Json/HomeJson";
import { useNavigate } from "react-router";
import LangOptions from "../Options/LangOptions";
import EraseWindow from "../Windows/EraseWindow";
import { useEffect } from "react";

export default function Navbar({user, title, levelOptions, menu, night, account, toggleFade}:NavbarInterface & 
  {account: eraseWindowInterface , toggleFade: ((langParam:Lang)=>void) | undefined}) {
    const navigate = useNavigate();

    const {lang, username} = user;
    const {showTitle, setShowTitle} = title;
    const {level, percentage, eraseXPBar} = levelOptions;
    const {openMenu, setOpenMenu} = menu;
    const {nightMode, setNightMode} = night;
    const {eraseAccountWindow, setEraseAccountWindow, eraseAccount, setEraseAccount} = account

    useEffect(()=>{
      if (eraseAccount){
        localStorage.clear()
        navigate("/")
      }
    }, [eraseAccount])

  return (
          <section className="min-h-15 text-center bg-blue-500 text-3xl w-full flex flex-row border-t-1 border-blue-600">

            <EraseWindow lang={lang} windowBool={eraseAccountWindow} windowBoolSetter={setEraseAccountWindow} eraserFnc={setEraseAccount} 
              alertText={homeJson.eraseAccountAlert[lang]}/>

            <div className="w-full flex flex-row items-center px-2" onClick={()=> setShowTitle(prev=> !prev)}>
            {showTitle ? 
            (<h1 className="text-center w-full text-2xl font-bold">{titlesJson[level- 1][lang]}</h1>):
            (<>
              <h1 className="min-w-25 text-2xl">LVL {level}</h1>
              <XPBar {...{percentage, eraseXPBar}}/>
            </>)
            }
            </div>
            
                <Menu {...{lang, username, openMenu, setOpenMenu, account}} 
                children={<>

                    <LangOptions {...{lang, toggleFade}}/>

                    <NightModeBtn {...{nightMode, setNightMode}}/>
                      
                    <button onClick={()=>setEraseAccountWindow?.(true)}>{homeJson.eraseAccount[lang]}</button>

                </>}/>

                <button className="h-full w-18" onClick={()=>setOpenMenu(true)}>
                  <img src="/svg/hamburger.svg" alt="Hamburger icon" className="h-full w-full"/>
                </button>

          </section>
  )
}
