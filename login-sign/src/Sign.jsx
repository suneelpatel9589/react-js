import { useState } from "react"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'



function Sign(){

    let[logindata,setlogindata]=useState({})

    function hdl(e){
        let{name,value}=e.target
        setlogindata({...logindata,[name]:value})
    }

    let localdata =JSON.parse(localStorage.getItem('userdata'))

    function finalsumbit(e){
        e.preventDefault()
        if(localdata.username != logindata.username || localdata.password != logindata.password ){
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
        })

        }
        else{
            Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Login Successful'
        })

        }
    }
    return(
        <>
        <h1>login form</h1>

        <form action="" onSubmit={finalsumbit}>
            <label htmlFor="">username</label>
            <input type="text" name="username" onChange={hdl} /> <br />

            
            <label htmlFor="">password</label>
            <input type="text" name="password" onChange={hdl} /> <br />

            <input type="submit" value="login" />

        </form>

       <button><Link to="/">back</Link></button>
        
        
        
        </>
    )
}
export default Sign