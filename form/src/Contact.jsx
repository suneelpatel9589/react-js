import { useState } from "react"

function Contact(){
    let[name,setname]=useState()
    let[age,setage]=useState()
    let[city,setcity]=useState()
    let[email,setemail]=useState()
    let[contact,setcontact]=useState()

    function handlesubmit(e){
        e.preventDefault()
        alert(name+" "+age+" "+city+" "+email+" "+contact)

    }
    return(
        <>
        
     <div className=" flex items-center justify-center bg-orange-300 p-10 ">
      <form  action="" className="  w-120 bg-white p-6 rounded-2xl space-y-5" onSubmit={handlesubmit}>
        <h2 className="text-2xl font-semibold  text-center">Contact Us</h2>

        {/* Name */}
        <div>
          <label className=" block mb-1"> Name </label> 
          <input type="text" className="w-full p-3 rounded-lg border" placeholder="Enter your name" onChange={(e)=>setname(e.target.value)} />
        </div>

        <div>
          <label className=" block mb-1"> DOB </label>
          <input type="date"className="w-full p-3 rounded-lg border" placeholder="Enter your Age" onChange={(e)=>setage(e.target.value)} />
        </div>

         <div>
          <label className="block mb-1"> City </label>
          <input type="text" className=" w-full p-3 rounded-lg border " placeholder="Enter Your City"  onChange={(e)=>setcity(e.target.value)}   />
        </div>

        <div>
          <label className=" block mb-1"> Email </label>
          <input type="email" className="w-full p-3 rounded-lg border " placeholder="Enter your Email"   onChange={(e)=>setemail(e.target.value)}/>
        </div>

        <div>
          <label className="block mb-1  "> Contact </label>
          <input type="text" className="w-full p-3 rounded-lg border "  placeholder="Enter Your Contact"  onChange={(e)=>setcontact(e.target.value)} />
         </div>
       

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg" > Sumbit</button>
      </form>
    </div>


    

        </>
    )
}
export default Contact