import { type Dispatch, type SetStateAction, type RefObject } from 'react'

export type Lang = "es" | "en"

export interface menuInterface{
  openMenu: boolean,
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export interface newTaskInterface{
  task: string;
  times: number;
  difficult: string; 
  id: number
  exp: number
}

export interface propsType extends nightModeInterface{
  lang: Lang;
  setLang?: Dispatch<SetStateAction<Lang>>;
  fadeLang?: boolean;
  user: RefObject<HTMLInputElement | null>;
  toggleFade?: (langParam:Lang) => void;
}

export interface nightModeInterface{
    nightMode: boolean;
    setNightMode?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface alertWindowInterface{
  alertWindow?: boolean;
  setAlertWindow: React.Dispatch<React.SetStateAction<boolean>>;
  eraseTaskState?: boolean;
  setEraseTaskState: React.Dispatch<React.SetStateAction<boolean>>
}

export interface levelUpWindowInterface{
  levelUpWindow: boolean;
  setLevelUpWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavbarInterface{
    user:{
        lang: Lang,
        username: string | null
    },
    title:{
        showTitle: boolean,
        setShowTitle: React.Dispatch<React.SetStateAction<boolean>>
    },
    levelOptions:{
        level: number,
        percentage:number,
        eraseXPBar: boolean
    },
    menu:{
        openMenu: boolean,
        setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
    },
    night:{
        nightMode: boolean,
        setNightMode: React.Dispatch<React.SetStateAction<boolean>> | undefined
    }
}