import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import Home from './pages/Home'
import { useState } from 'react'

export type Lang = "es" | "en"

function App() {
  const [lang, setLang] = useState<Lang>("es");

  

  return (
    <>
      <Routes>
        
          <Route index element={<Login {...{lang, setLang}}/>}></Route>
          <Route path="home" element={<Home />} ></Route>
   
      </Routes>
    </>
  )
}

export default App
