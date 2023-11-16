
/* function Navbar(lista) {
    return <li> {lista} </li>
}
 */
const Navi = () => {

    const listas = ["incio", "menu","contacto"];

  return(
    <>
        <ul>
            {listas.map((e)=> <li> {e} </li>)}
        </ul>
    </>
  )
}

export default Navi