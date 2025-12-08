import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



function Login(){
    let[loginfrm,setloginfrm]=useState({})
    let navigator=useNavigate()
    function handle(e){
        let{name,value}=e.target
        setloginfrm({...loginfrm,[name]:value})

    }
    let localdata= JSON.parse(localStorage.getItem('userdata'))
    function final(e){
        e.preventDefault()
        if(localdata.email !== loginfrm.email || localdata.password !== loginfrm.password ){
            toast.error('data not found')
        }
        else{
            toast.success('login successfully')
            navigator('/')

        }
        
        
    }
    return(

        <>

        <section>
            <form action="" className="bg-green-700 p-12 pl-120 " onSubmit={final}>
               
                <div className="bg-orange-200 w-130 h-137 p-15 pl-18 rounded-xl ">
                    <h1 className="text-center mb-5 font-bold text-3xl">Sign in</h1>

                    <label htmlFor="" className="block ">email</label>
                    <input type="text" name="email"className=" border w-86 px-2 py-1 rounded" required onChange={handle}/> <br /> <br />

                    <label htmlFor=""className="block ">password</label>
                    <input type="text" name="password"className=" border w-86 px-2 py-1 rounded"  required onChange={handle} /> <br />

                <input type="submit" className="bg-blue-200 px-15 py-1 ml-16 mt-6 border rounded hover:bg-red-700 font-bold" />
                </div>
            </form>
        </section>
        
        
        
        
        </>
    )
}
export default Login