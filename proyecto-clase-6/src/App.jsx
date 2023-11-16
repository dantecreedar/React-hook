import './App.css'
import Menu from './Components/Menu'
import Index from './Components/Index'
import Test from './Components/Test'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}/>
        <Route path="index" element={<Index/>}/>
        <Route path="test" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
