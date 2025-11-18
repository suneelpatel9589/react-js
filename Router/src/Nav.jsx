import { Link } from "react-router-dom"





function Nav(){
    
    return(
        <>
        <div style={{display:"flex" , justifyContent:"space-around",alignItems:"center", backgroundColor:"lightblue"}}>
            <h1>logo</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>

        
            </ul>
      



        </div>
 
        <div>
            <button><Link to="/about"> go to about</Link></button>
        </div>
        
        </>
    )
}
export default Nav