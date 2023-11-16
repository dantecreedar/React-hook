import './App.css'
import Home from './Components/Home'
import Blogs from './Components/Blogs'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <BrowserRouter>
          <Routes path="" element={<Home/>}>
              <Route path='blogs' element={<Blogs/>} />
              <Route path='home' element={<Home/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
