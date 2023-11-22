import Context from "../Context";


function Contacts() {
  let lista = ["elemento_1","elemento_2","elemento_3","elemento_4","elemento_5","elemento_6"];
  return (
   
    <div>
         <div className="p-5 m-3 shadow-lg">
            <h2 className="p-3">Soy el Contacts</h2>
            <p className="shadow-md rounded-lg p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, mollitia! Quidem, impedit!</p>
        </div>
        <ul className="p-5 m-4 shadow-md flex flex-wrap justify-center">
          {
            lista.map(e => <li className="p-5 m-5 shadow" key={e.id}> La Lista de los Elementos son: {e} </li> )
          },
          {
            lista.map(e => <li className="p-5 m-5 shadow" key={e.id}> La Lista de los Elementos son: {e} </li> )
          },
          {
            lista.map(e => <li className="p-5 m-5 shadow" key={e.id}> La Lista de los Elementos son: {e} </li> )
          },
        </ul>

        <Context/>
    </div>
  )
}

export default Contacts
