const Navi = () => {
    let lista = ["incio","menu", "contenido"]

  return(

    <>
       <ul className="bg-orange">
            {lista.map((e)=> <li className="p bg-black t-white pointer" key={e.id}> {e} </li> )}
       </ul>
    </>
  )
}

export default Navi
