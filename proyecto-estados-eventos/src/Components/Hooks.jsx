import { useState, useEffect } from "react"

function Like() {
    const [estado, setEstado] = useState(0)

    useEffect(() => {
      console.log("El total es: " + estado)
    }, [estado])

    return <h1 style={{margin:"5px", cursor:"pointer"}} onClick={()=>{
        setEstado(estado + 1)
    }}> {estado} </h1>
}

const Hooks = ()=>{
    return(
        <>
           <div style={{display:"flex", margin:"15px",padding: "20px"}}>
                <h4 style={{margin:"3px"}}>Dame tu opinion sobre el Link!</h4>
                <Like/>
           </div>
        </>
    )
}

export default Hooks