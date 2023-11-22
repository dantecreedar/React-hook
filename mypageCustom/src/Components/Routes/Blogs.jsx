
const Principal = ({h}) => {
  return <h3 className="bg-red-400 text-white p-4"> Esto es la {h} </h3>
}


function Blogs() {

    let txt = "Mi pagina Web";
    let lista = ["elemento_1", "elemento_2", "elemento_3", "elemento_4"]
    let dato = {
        title: "este es el objeto"
    }

    let m = [
        {
            title: "este es el titulo"
        },
        {
            title: "este es el titulo"
        },
        {
            title: "este es el titulo"
        },
    ]
 /*    let data = [] */
    return ( 
        <>
            <div>
                <h3 className="p-5 shadow-md"> {txt} </h3>
                <p className="p-5 shadow-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui amet quaerat modi!</p>
                <Principal h="La PROPS"/>
                <ul>
                    {lista.map( e => <li className="p-3 border hover:bg-blue-200" key={e.id}> {e} </li>)}
                </ul>

                <h3 className="p-5 border">
                    {dato.title}
                </h3>
                <h4 className="p-3">Mas datos...</h4>
                <ul>
                    {m.map(e => <li key={e.id} className="p-3 border bg-slate-200"> {e.title} </li>)}
                </ul>
            </div>
        </>
     );
}

export default Blogs;