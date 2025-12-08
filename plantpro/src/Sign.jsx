import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

function Sign(){
    let[frmdata,setfrmdata]=useState({})
    let login=useNavigate()
    function handle(e){
        let{name,value}=e.target
        setfrmdata({...frmdata,[name]:value})

    }
    function final(e){
        e.preventDefault()
        localStorage.setItem('userdata', JSON.stringify(frmdata))
        login("/login")
        toast.success('sign up successfully')
        
        
    }
    return(

        <>

        <section>
            <form action="" className="bg-green-700 p-12 pl-120 " onSubmit={final}>
               
                <div className="bg-orange-200 w-130 h-137 p-15 pl-18 rounded-xl ">
                    <h1 className="text-center mb-5 font-bold text-3xl">Sign up</h1>
                    
        
                    <label htmlFor="" className="block ">name</label>
                    <input type="text" name="name"className=" border w-86 px-2 py-1 rounded" required onChange={handle} /> <br />
            
                    <label htmlFor="" className="block ">age</label>
                    <input type="text" name="age"className=" border w-86 px-2 py-1 rounded" required onChange={handle} /> <br />
            
                    <label htmlFor="" className="block ">city</label>
                    <input type="text" name="city" className=" border w-86 px-2 py-1 rounded" required  onChange={handle} />  <br />

                    <label htmlFor="" className="block ">contact</label>
                    <input type="text" name="contact" className=" border w-86 px-2 py-1 rounded" required  onChange={handle}/> <br />

                    <label htmlFor="" className="block ">email</label>
                    <input type="text" name="email"className=" border w-86 px-2 py-1 rounded" required  onChange={handle}/> <br />

                    <label htmlFor=""className="block ">password</label>
                    <input type="text" name="password"className=" border w-86 px-2 py-1 rounded" required  onChange={handle} /> <br />

                <input type="submit" className="bg-blue-200 px-15 py-1 ml-16 mt-6 border rounded hover:bg-red-700 font-bold" />
                </div>
            </form>
        </section>
        
        
        
        
        </>
    )
}
export default Sign