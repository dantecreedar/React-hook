import { useState } from "react"

function Contar({estado}) {
  return <h1 className="text-2xl"> {estado} </h1>
}



function Blogs() {
  const [estado, setEstado] = useState("estado...en cambio")
  

  return (
    <div>
         <div className="p-5 m-3 shadow-lg">
            <h2 className="p-3">Soy el Blogs</h2>
            <p className="shadow-md rounded-lg p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, mollitia! Quidem, impedit!</p>
        </div>

        <div className="shadow-xl m-5 h-96 grid grid-cols-2 border">
            <div>
              <button className="m-5 p-2" onClick={()=>{
                setEstado("se cambio el estado")

                
              }}>Click Me!</button>
            </div>
            <div className="border flex justify-center">
                <div className="grid grid-cols-1 place-content-center">
                    <Contar estado={estado}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Blogs
