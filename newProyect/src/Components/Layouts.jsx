import { Outlet,Link } from 'react-router-dom'

function Layouts() {
    return ( 
        <>
            <ul className='bg-blue-600 text-white flex'>
                <li className='p-5 hover:bg-blue-400'> <Link to="/"> Home </Link> </li>
                <li className='p-5 hover:bg-blue-400'> <Link to="/blogs"> Blogs </Link> </li>
                <li className='p-5 hover:bg-blue-400'> <Link to="/contact"> Contact </Link> </li>
            </ul>

            <Outlet/>
        </>
     );
}

export default Layouts;