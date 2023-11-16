// eslint-disable-next-line react/prop-types
function Mostrar({titulo}) {
    return <span> {titulo} </span>
}


const Props = ()=>{
    return(
        <>
            <h3>Soy un Props!</h3>
            <Mostrar titulo={"Soy el Componente!"} />
        </>
    )
}

export default Props;