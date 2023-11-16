import Main from "./Main"
import Footer from "./Footer"
function Inicio() {
  return <li> Inicio </li>
}
function Galeria() {
  return <li> Inicio </li>
}
function Contacto() {
  return <li> Inicio </li>
}

const Home = () => {
  return(
    <>
        <ul >
            <Inicio/>
            <Galeria/>
            <Contacto/>
        </ul>
        <Main/>
        <Footer/>
    </>
  )
}

export default Home