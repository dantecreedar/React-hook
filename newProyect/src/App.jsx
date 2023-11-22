import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layouts from './Components/Layouts'
import Home from './Components/Home'
import Blogs from './Components/Blogs'
import Contact from './Components/Contact'

function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layouts />}>
                  <Route index element={<Home/>} />
                  <Route path='blogs' element={<Blogs/>}/>
                  <Route path='contact' element={<Contact/>} />
                </Route>
                
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
