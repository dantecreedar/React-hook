import js from "../../assets/javascript.png"
// eslint-disable-next-line react/prop-types
function Mostrar({e}) {
    return <h1 className="p-5 bg-black text-white">Yo estoy vivo!... yo soy : ...{e} </h1>
}


function Blogs() {
    let txt = "Soy la props";
    let data = "Soy otro elemento";

    return ( 
        <>
            <div className="m-5 p-5 shadow-sm border">
                <Mostrar e={txt} />
                <div className="flex">
                    <h3 className="p-5 bg-yellow-400">Soy el Blogs</h3> 
                    <img src={js} alt="" className="w-16"/>
                </div>
                <h4 className="bg-green-400 text-white p-5"> Aparte...{data} </h4>
                <p className="p-9 shadow-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos qui voluptas facere.</p>



            </div>
        </>
     );
}

export default Blogs;