import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import Home from './pages/Home'
import {  useRef, useState, type Dispatch, type SetStateAction, type RefObject } from 'react'
import Layout from './pages/Layout'

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

function App() {
  const [lang, setLang] = useState<Lang>("es");
  const [fadeLang, setFadeLang] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  const user = useRef<HTMLInputElement | null>(null)


  const toggleFade = (langParam:Lang) => {
    if(langParam !== lang){
    setFadeLang(true)
    setTimeout(()=> {
      setLang(langParam)
      setFadeLang(false)
    },500)
  }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout {...{fadeLang}} />} >

          <Route index element={<Login {...{lang, toggleFade, nightMode, user}}/>}></Route>
          <Route path="home" element={<Home {...{lang, setLang, nightMode, setNightMode, user}}/>} ></Route>

        </Route>
        
      </Routes>
    </>
  )
}

export default App
