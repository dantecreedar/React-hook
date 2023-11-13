import { useState } from "react";
const Mostrar = () => {
    const [like, setLike] = useState(0);


        return <button onClick={()=> {
            setLike(like + 1)
        } }> {like} </button>
}




const Hook = () => {
    return(
        <>
            <Mostrar/>
        </>
    )
}

export default Hook
