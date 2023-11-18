import './App.css'
import Menu from "./Components/Menu"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from './Components/page';

function App() {
  
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Menu/>} />
              <Route path='page' element={<Page/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
