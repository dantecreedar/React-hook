import { Outlet,Link } from 'react-router-dom'
/* import  image  from "../assets/javascript.png" */

function Layouts() {
    return ( 
        <>
            <ul className='bg-blue-600 flex'>
                <li className='hover:bg-blue-300 text-white p-3'><Link to="/"> Home </Link></li>
                <li className='hover:bg-blue-300 text-white p-3'><Link to="/blogs"> Blogs </Link></li>
                <li className='hover:bg-blue-300 text-white p-3'><Link to="/contact"> Contact </Link></li>
                {/* <img src={image} alt="" className=''/> */}
            </ul>
        <Outlet/>
        </>
     );
}

export default Layouts;