import {Outlet, Link } from 'react-router-dom'
function Layouts() {
  return (
    <div>
  {/*       <h1 className='p-1'>Soy el layout</h1> */}
        <ul className='bg-black text-white flex'>
            <li className='p-5'>
                <Link to="home">Home</Link>
            </li>
            <li className='p-5'>
                <Link to="blogs">Blogs</Link>
            </li>
            <li className='p-5'>
                <Link to="contacts">Contacts</Link>
            </li>
        </ul>

        <Outlet/>
    </div>
  )
}

export default Layouts
