import { useState } from "react"


function Form(){

    let[frmdata, setfrmdata]=useState({name:"",age:"",city:""})
    function handel(e){
        let{name,value}=e.target
        setfrmdata({...frmdata,[name]:value})
    }
    function final(e){
        e.preventDefault()
        console.log(frmdata);
        

    }
    return(
        <form action=""  onSubmit={final}>
            <label htmlFor="">name</label>
            <input type="text" name="name"  onChange={handel}/>


             <label htmlFor="">age</label>
            <input type="text" name="age"  onChange={handel}/>

            
            <label htmlFor="">city</label>
           <select name="city" onChange={handel}>
        <option value="">Select City</option>
        <option value="delhi">Delhi</option>
        <option value="mumbai">Mumbai</option>
        <option value="pune">Pune</option>
        <option value="indore">Indore</option>
      </select>

          

            

            <input type="submit" />
        </form>
    )


    
}
export default Form