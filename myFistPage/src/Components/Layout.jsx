import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-black text-white">
        <ul className="flex">
          <li className="p-5 hover:text-blue-300">
            <Link to="/">Home</Link>
          </li>
          <li className="p-5 hover:text-blue-300">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="p-5 hover:text-blue-300">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;