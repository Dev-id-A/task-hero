import { type Dispatch, type SetStateAction, type RefObject } from 'react'

export type Lang = "es" | "en"

export interface propsType extends nightModeInterface{
  lang: Lang;
  setLang?: Dispatch<SetStateAction<Lang>>;
  fadeLang?: boolean;
  user:RefObject<HTMLInputElement | null>;
  toggleFade?: (langParam:Lang) => void;
}

export interface nightModeInterface{
    nightMode: boolean;
    setNightMode?:React.Dispatch<React.SetStateAction<boolean>>;
}

export interface levelInterface{
  level: number;
  setLevel: Dispatch<SetStateAction<number>>;
  actualXP: number;
  setactualXP: Dispatch<SetStateAction<number>>;
  maxXP: number;
  setMaxXP: Dispatch<SetStateAction<number>>;
}