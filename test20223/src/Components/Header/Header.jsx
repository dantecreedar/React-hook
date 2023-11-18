function Header() {
    const lista = ["inicio", "menu", "contacto"]
    return (  
        <>
            <ul>
                {lista.map((e)=> <li> {e} </li>)}
            </ul>
        </>
    );
}

export default Header