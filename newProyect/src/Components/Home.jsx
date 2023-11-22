import Card from "../Components/Card/Card"
function Home() {
    return ( 
        <>
           <div className="m-5 p-5 shadow-lg bg-white">
                <h3>Soy el home</h3>
                <p className="m-5">Este es un parrafo con Oracion...</p>
               <ul className="flex justify-center gap-5 flex flex-wrap shadow-2xl p-5">
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
               </ul>
           </div>
        </>
     );
}

export default Home;