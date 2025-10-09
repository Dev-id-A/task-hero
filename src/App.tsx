import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import Home from './pages/Home'
import {  useState } from 'react'
import Layout from './pages/Layout'

export type Lang = "es" | "en"

function App() {
  const [lang, setLang] = useState<Lang>("es");
  const [fadeLang, setFadeLang] = useState(false);
  const [nightMode, setNightMode] = useState(false);

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

          <Route index element={<Login {...{lang, toggleFade, nightMode}}/>}></Route>
          <Route path="home" element={<Home {...{nightMode, setNightMode}}/>} ></Route>

        </Route>
        
      </Routes>
    </>
  )
}

export default App
