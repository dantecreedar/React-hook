import { useState } from 'react'
import './App.css'

function Mostrar() {
  const [estado, setEstado] = useState(0)

    return <button onClick={
      ()=>{
        setEstado(estado + 1);
      }
    }> Click {estado} </button>
}



function App() {


  return (
    <>

        <Mostrar/>

    </>
  )
}

export default App
