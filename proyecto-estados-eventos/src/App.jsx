import reactLogo from './assets/react.svg'

import './App.css'
import Props from './Components/Props'
import Hooks from './Components/Hooks'

function App() {


  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" />

      <div>
          <h1>Esto es React</h1>
          <Hooks/>
          <div className='card'>
              <span>Aqui implementaremos codigo!</span><hr />
              <Props/>
          </div>
      </div>

      
    </>
  )
}

export default App
