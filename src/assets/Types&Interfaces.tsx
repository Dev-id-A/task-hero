import { type Dispatch, type SetStateAction, type RefObject } from 'react'

export type Lang = "es" | "en"

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