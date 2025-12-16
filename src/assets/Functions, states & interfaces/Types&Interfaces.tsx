import { type Dispatch, type SetStateAction, type RefObject } from 'react'

export type Lang = "es" | "en";

export type ReactStateBool = React.Dispatch<React.SetStateAction<boolean>>
export type ReactStateNumber = React.Dispatch<React.SetStateAction<number>>

export interface menuInterface{
  openMenu: boolean,
  setOpenMenu: ReactStateBool
  nightMode: boolean
}

export interface newTaskInterface{
  task: string;
  times: number;
  difficult: string; 
  id: number
  exp: number
  completed?: boolean //For recurrent task only
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

export interface eraseWindowInterface{
  windowBool?: boolean;
  windowBoolSetter?: ReactStateBool;
  
  eraseTaskState?: boolean;
  setEraseTaskState?: ReactStateBool;
  eraseAccountWindow?: boolean;
  setEraseAccountWindow?: ReactStateBool;

  eraserFnc?: ReactStateBool;
  alertText?: string;
  eraseAccount?: boolean;
  setEraseAccount?: ReactStateBool;
}


  export interface alertWindowInterface{
    nightMode?: boolean
    alertWindow?: boolean;
    setAlertWindow: ReactStateBool;
    alertMsgRef: RefObject<string>;
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
    setEraseWindow: ReactStateBool
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
  nightMode: boolean
}
