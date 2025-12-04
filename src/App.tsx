import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import Home from './pages/Home'
import {  useRef, useState } from 'react'
import Layout from './pages/Layout'
import type { Lang } from './assets/Functions, states & interfaces/Types&Interfaces'


function App() {
  const [lang, setLang] = useState<Lang>("es");
  const [fadeLang, setFadeLang] = useState(false);
  const [nightMode, setNightMode] = useState(()=>{
    const mode = localStorage.getItem("mode");

    return mode === "true";
  });
  const user = useRef<HTMLInputElement | null>(null);

  const toggleFade = (langParam:Lang) => {
    if(langParam !== lang){
    setFadeLang(true);
    localStorage.setItem("lang", langParam);
    console.log(lang)
    setTimeout(()=> {
      setLang(langParam);
      setFadeLang(false);
    },500)
  }
  };
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout {...{fadeLang}} />} >

          <Route index element={<Login {...{lang, toggleFade, nightMode, setNightMode, user}} />}></Route>
          <Route path="home" element={<Home {...{lang, toggleFade, setLang, nightMode, setNightMode, user}} />} ></Route>

        </Route>
        
      </Routes>
    </>
  )
}

export default App
