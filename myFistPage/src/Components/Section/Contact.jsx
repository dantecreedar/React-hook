
function Contact() {
    const lista = ["number: 4886759", "number: 4556789", "number: 456789"]; 
  return (
    <div>
        <ul className="shadow-2xl p-3 m-7 rounded-xl">
            {
                lista.map((item)=> <li key={item.id} className="shadow-lg m-5 p-3"> {item} </li>)
            }
        </ul>
    </div>
  )
}

export default Contact
