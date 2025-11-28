import { useState } from "react"



function Contact(){
    let[toggle,setoggle]=useState(false)
     let[frmdata,setfrmdata]=useState({})
    function hdl(e){
        let{name,value}= e.target
        setfrmdata({...frmdata,[name]:value})

    }
    function final(e){
        e.preventDefault()
        console.log(frmdata);
        localStorage.setItem('userdata',JSON.stringify(frmdata))
        

    }
     let localdata=JSON.parse(localStorage.getItem('userdata')

)

    return(
        <>
        <form action="" onSubmit={final}>
          
            <label htmlFor="">name</label>
            <input type="text"  name="name" onChange={hdl}/> <br />

            
            <label htmlFor="">age</label>
            <input type="text"  name="age" onChange={hdl}/> <br />

            
            <label htmlFor="">email</label>
            <input type="text"  name="email" onChange={hdl}/> <br />

            <input type="submit" />
        </form>



        <button onClick={()=>setoggle(!toggle)}>  {toggle ? "hello" :"bye"} </button>

        {toggle ? <h1>hello</h1> :<h1>bye</h1>}



        
        </>
    )
}

export default Contact