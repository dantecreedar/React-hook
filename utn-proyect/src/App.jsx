import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layouts from './Components/Layouts'
import Home from './Components/Routes/Home'
import Blogs from './Components/Routes/Blogs'
import Contact from './Components/Routes/Contact'
import Error from './Components/Routes/Erro'

function App() {
  
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layouts/>}>
                  <Route index element={<Home/>} />
                  <Route path='blogs' element={<Blogs/>} />
                  <Route path='contact' element={<Contact/>} /> 
              </Route>
              <Route path='*' element={<Error/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
