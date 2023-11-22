import { useEffect, useState } from "react";



function Contact() {
    const [e, setE] = useState("...Text...")

    function ex() {
        setE("Nuevos datos...!!!:D")
    }

    /* useEffect(()=>{
        setTimeout(()=>{
            ex()
        }, 1000)
    }) */
    return ( 
        <>
            <div className="shadow-2xl">
                    <h3>Soy el Contact</h3>
                    <div className="p-5 m-5 shadow-lg">
                        <h1 className="text-2xl"> {e} </h1>
                    </div>
                    <button className="bg-black text-white p-5 hover:bg-white hover:text-black hover:border" onClick={ex}>Cambiar</button>

            </div>
        </>
     );
}

export default Contact;