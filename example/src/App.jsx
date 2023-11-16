import './App.css'
import Index from './Components/Index';
import Menu from './Components/Menu'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}/>
          <Route path="index" element={<Index />}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
