import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layouts from './Components/Layouts'
import Home from './Components/Tasks/Home'
import Blogs from './Components/Tasks/Blogs'
import Contacts from './Components/Tasks/Contacts'
import Info from './Components/Info'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layouts />}>
                <Route path="home" element={<Home/>} />
                <Route path="blogs" element={<Blogs/>} />
                <Route path="contacts" element={<Contacts/>} />
            </Route>
          </Routes>
      </BrowserRouter>
{/*       <Info/> */}
    </>
  )
}

export default App
