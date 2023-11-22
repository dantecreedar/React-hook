import { useEffect, useState } from "react"
import Card from "./Card"

// eslint-disable-next-line react/prop-types
function Count({estado}) {
  return <h3>Este es el contador:  <span> {estado} </span></h3>
}



export default function Home() {
  const [estado, setEstado] = useState(0)

  useEffect(()=>{
    setTimeout(()=>{
      setEstado(estado + 1)
    }, 1000)
  })

  return (
    <div>
        <div className="bg-white shadow-lg m-5 p-3">
            <div>
                <Count estado={estado}/>
            </div>
        </div>

        <div className="grid md:grid-cols-4">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
    </div>
  )
}
