import { useState } from "react";

/* function Info({estado}) {
    return <h1 className="p-5 bg-yellow-100 m-6"> {estado} </h1>
}
 */
function Blogs() {

    const [estado, setEstado] = useState("No se muestran datos en la primera");

    return (  
        <>
            <div className="m-5 p-5 shadow-lg bg-yellow-200">
                <h3>Soy el Blogs</h3>
                <div>
                    <h1 className="p-5 m-5 bg-white shadow-lg">Mostrar Informacion!</h1>
                    <div>
                        <h1 className="p-5"> {estado} </h1>
                    </div>
                    <button className="bg-blue-400 text-white mr-3 hover:bg-blue-300 p-2" onClick={
                        ()=>{
                            setEstado("Infomacion activa!");
                        }
                    }>Mostrar_1</button>
                  {/*   <button className="bg-blue-400 text-white mr-3 hover:bg-blue-300 p-2" onClick={mostrar_2}>Mostrar_2</button>
                    <button className="bg-blue-400 text-white mr-3 hover:bg-blue-300 p-2" onClick={mostrar_3}>Mostrar_3</button> */}
                </div>
            </div>
        </>
    );
}

export default Blogs;