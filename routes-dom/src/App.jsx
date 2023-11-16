import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Components/Home';

function App() {
  return (
    <>
      <h1>Routes</h1>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
