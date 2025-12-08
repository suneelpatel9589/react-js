import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from 'react-toastify';



function Frm() {
    let[frmdata,setfrmdata]=useState({})
    let navigator=useNavigate()

    function handel(e){
        let{name,value}=e.target
        setfrmdata({...frmdata,[name]:value})
    }
    function final(e){
        e.preventDefault()
        axios.post('http://localhost:3000/userdetails',frmdata)
        .then(res=>
            toast.success("data added",{
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        })
        )
  
        navigator("/Showdata")
    }
    return(


        <>

        <form action="" onSubmit={final}>
            <label htmlFor="">name</label>
            <input type="text" name="name"  onChange={handel}/> <br />

            
            <label htmlFor="">age</label>
            <input type="text" name="age"  onChange={handel}/> <br />

            
            <label htmlFor="">city</label>
            <input type="text" name="city"  onChange={handel}/> <br />

            
            <label htmlFor="">contact</label>
            <input type="text" name="contact"  onChange={handel}/> <br />

            
            <label htmlFor="">email</label>
            <input type="text" name="email"  onChange={handel}/> <br />

            
            <label htmlFor="">password</label>
            <input type="text" name="password"  onChange={handel}/> <br />

            <input type="submit" />
            

            


            
        </form>
        
         < ToastContainer/>
        </>
      
    )


}

export default Frm;
