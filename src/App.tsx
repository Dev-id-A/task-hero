import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import Home from './pages/Home'
import {  useRef, useState } from 'react'
import Layout from './pages/Layout'
import type { Lang } from './assets/Types&Interfaces'


function App() {
  const [lang, setLang] = useState<Lang>("es");
  const [fadeLang, setFadeLang] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  const user = useRef<HTMLInputElement | null>(null);



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

          <Route index element={<Login {...{lang, toggleFade, nightMode, user}} />}></Route>
          <Route path="home" element={<Home {...{lang, setLang, nightMode, setNightMode, user}} />} ></Route>

        </Route>
        
      </Routes>
    </>
  )
}

export default App
