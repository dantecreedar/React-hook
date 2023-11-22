import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout"
import Home from './Components/Section/Home';
import Info from './Components/Section/Info';
import Contact from './Components/Section/Contact';
import Blogs from './Components/Section/Blogs';
function App() {

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Info/>
    </>
  )
}

export default App
