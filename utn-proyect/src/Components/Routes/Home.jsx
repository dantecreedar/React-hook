import Card from "../Tasks/Card";

function Home() {
    let e = ["elemento_1", "elemento_2","elemento_3", "elemento_4", "elemento_5"];
    let o = [ 
        {
            txt:"titulo_1",
            subTitulo:"subtitulo_1"
        },
        {
            txt:"titulo_1",
            subTitulo:"subtitulo_1"
        },
        {
            txt:"titulo_1",
            subTitulo:"subtitulo_1"
        },
        {
            txt:"titulo_1",
            subTitulo:"subtitulo_1"
        },
        {
            txt:"titulo_1",
            subTitulo:"subtitulo_1"
        },
        {
            txt:"titulo_1",
            subTitulo:"subtitulo_1"
        },
     ]

    return ( 
        <>
            <div className="p-5 shadow-md m-5">
                <h3>Soy el Home</h3>
                <p>Este es el home y soy programador...!</p>
                <div className="shadow-sm p-5">
                    <div className="border p-5 flex flex-wrap gap-2 justify-center">

                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                    </div>          
                </div>

                <div>
                    <di>
                        <ul className="flex gap-3 justify-center">
                        {
                            // eslint-disable-next-line react/jsx-key
                            o.map(o => 
                                // eslint-disable-next-line react/jsx-key
                                <div className="card"> 
                                    <div className="bg"> 
                                        <h3 className="p-3"> {o.txt} </h3> 
                                        <p className="p-5 shadow-lg m-5 rounded-md"> {o.subTitulo} </p> 
                                    </div>
                                        <div className="blob"></div>  
                                </div>
                            )
                        }
                        </ul>
                    </di>
                </div>
                <h1 className="text-center border p-5">Soy el Footer!!</h1>
            </div>
        </> 
     );
}

export default Home;