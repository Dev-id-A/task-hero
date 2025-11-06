import { type Dispatch, type SetStateAction, type RefObject } from 'react'

export type Lang = "es" | "en";

export type ReactStateBool = React.Dispatch<React.SetStateAction<boolean>>

export interface menuInterface{
  openMenu: boolean,
  setOpenMenu: ReactStateBool
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
    setNightMode?: ReactStateBool;
}

export interface alertWindowInterface{
  alertWindow?: boolean;
  setAlertWindow: ReactStateBool;
  eraseTaskState?: boolean;
  setEraseTaskState: ReactStateBool
}

export interface levelUpWindowInterface{
  levelUpWindow: boolean;
  setLevelUpWindow: ReactStateBool;
}

export interface NavbarInterface{
    user:{
        lang: Lang,
        username: string | null
    },
    title:{
        showTitle: boolean,
        setShowTitle: ReactStateBool
    },
    levelOptions:{
        level: number,
        percentage:number,
        eraseXPBar: boolean
    },
    menu:{
        openMenu: boolean,
        setOpenMenu: ReactStateBool
    },
    night:{
        nightMode: boolean,
        setNightMode: ReactStateBool | undefined
    }
}

export interface accordionInterface{
  user:{
    lang: Lang,
    setAlertWindow: ReactStateBool
  }
  taskCreate:{
    addTask: boolean,
    setAddTask: ReactStateBool
  }
  taskErase:{
    eraseTask:(id:number)=>void,
    eraseTaskState: boolean,
    setEraseTaskState: ReactStateBool,
    taskToErase: React.RefObject<number | null>,
    reduceTimes:(id:number)=>void,
  }
}