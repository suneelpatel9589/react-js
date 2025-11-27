import { useState } from "react"

function Form(){

    let[frmdata,setfrmdata]=useState({})

    function handelsumbit(e){
        let{name,value} = e.target
        setfrmdata({...frmdata,[name]:value})

    }
    function finalsumbit(e){
        e.preventDefault()
        console.log(frmdata);
        localStorage.setItem('userdata',JSON.stringify(frmdata))
        
    }
    return(

        <>
        

        <form action=""  onSubmit={finalsumbit}>
            <label htmlFor="">user name</label>
            <input type="text"  name="username" onChange={handelsumbit}/> <br />

             <label htmlFor="">user  email</label>
            <input type="text"  name="useremail" onChange={handelsumbit}/> <br />

             <label htmlFor="">user password</label>
            <input type="text"  name="userpassword" onChange={handelsumbit}/> <br />

            <input type="submit" />
        </form>
        
        
        
        
        
        </>
    )
}

export default Form