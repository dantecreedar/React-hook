import React, { useState } from "react"

function Mostrar() {
    const [info, setInfo] = useState("Sin datos");

    return <h3 onMouseMove={()=>{
        setInfo("mostrar");
    }}
    onMouseOut={()=> setInfo("sin datos")}
    > {info} </h3>
}

export default class Class extends React.Component{
    constructor(){
        super()

    }

    render(){
        return(
            <>
                <Mostrar/>
            </>
        )
    }
}