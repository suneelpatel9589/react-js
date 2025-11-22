import { Link, Outlet } from "react-router-dom"


function Nav() {
    return(
        <>
        <nav className="flex bg-blue-300 p-8 justify-around items-center">
            <h1>Navbar</h1>

            <ul className="flex none gap-30">
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>

                <button>Theam</button>
           
            </ul>
            
        </nav>

        <Outlet/>
        </>
    )
}
 export default Nav