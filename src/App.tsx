import { Route, Routes } from 'react-router'
import Login from './pages/login'
import Home from './pages/home'

function App() {

  return (
    <>
      <Routes>
        
          <Route index element={<Login />}></Route>
          <Route path="home" element={<Home />} ></Route>
   
      </Routes>
    </>
  )
}

export default App
