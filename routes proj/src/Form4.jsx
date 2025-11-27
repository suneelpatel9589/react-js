import { useState } from "react"

function Form4(){

    let[frmdata,setfrmdata]=useState({name:"",age:"",city:""})

    function handelsumbit(e){
        let[name,value]=e.target
        setfrmdata({...frmdata,[name]:value})

    function finalsubmit(e){
            e.preventdefault()
            console.log(frmdata);
            

        }
         

    }
    return(

        <form action="" onSubmit={finalsubmit}>
            <label htmlFor="">name</label>
            <input type="text" name="name"  onChange={handelsumbit}/>

            <label htmlFor="">age</label>
            <input type="text" name="age"  onChange={handelsumbit}/>

            <label htmlFor="">city</label>
            <input type="text" name="city"  onChange={handelsumbit}/>
        </form>
    )
}
export default Form4
