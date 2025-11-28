import { useEffect } from "react"
import { useState } from "react"

function Form(){

    let[frmdata,setfrmdata]=useState({})
    let[localdata,setlocaldata]=useState({})

    function handelsumbit(e){
        let{name,value} = e.target
        setfrmdata({...frmdata,[name]:value})

    }
    function finalsumbit(e){
        e.preventDefault()
        console.log(frmdata);
        localStorage.setItem('userdata',JSON.stringify(frmdata))
        
    }
    useEffect(() => {
       let val = JSON.parse(localStorage.getItem('userdata'))
       setlocaldata(val)
    },[handelsumbit])

    function Delete(){
        localStorage.clear(localdata)
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
        <hr />

       {/* <h1> {localdata.username}</h1>
       <h1> {localdata.useremail}</h1>
       <h1> {localdata.userpassword}</h1> */}
       <br />

       <button onClick={Delete}>delete localdata</button>
        
        
        
        
        
        </>
    )
}

export default Form