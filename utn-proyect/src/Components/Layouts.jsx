import { Outlet,Link } from 'react-router-dom'

function Layouts() {
    return ( 
        <>
            <ul className='flex bg-green-600'>
                <li className=' p-3 transition-all hover:bg-green-500 text-white'><Link to="/"> Home </Link></li>
                <li className=' p-3 transition-all hover:bg-green-500 text-white'><Link to="/Blogs"> Blogs </Link></li>
                <li className=' p-3 transition-all hover:bg-green-500 text-white'><Link to="/Contact"> Contact </Link></li>
            </ul>
            <Outlet />
        </>
     );
}

export default Layouts;