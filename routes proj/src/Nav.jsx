import { Link, Outlet } from "react-router-dom"


function Nav() {
    return(
        <>
        <nav className="flex bg-blue-300 p-8 justify-around items-center">
            <h1>Navbar</h1>

            <ul className="flex none gap-30">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>

                <button>Theam</button>
           
            </ul>
            
        </nav>

        
            <Outlet/>

            <div>
                <h1>footer</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla itaque sapiente eaque beatae aut, error, magnam repellendus pariatur vitae consectetur perspiciatis natus at voluptates et iusto tenetur iure id assumenda.</p>
            </div>
        
        </>
    )
}
 export default Nav