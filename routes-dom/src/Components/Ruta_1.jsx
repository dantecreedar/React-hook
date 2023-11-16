import { Outlet, Link } from "react-router-dom";

export default function Ruta_1() {
    return(
        <>
            <h3>Esta es la ruta 1</h3>
            <ul>
                <li>
                    <Link to="/">Ruta_1</Link>
                </li>
            </ul>

            <Outlet/>
        </>
    )
}