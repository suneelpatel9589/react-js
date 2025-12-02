import { useEffect, useState } from "react"
import axios from "axios"
function App(){

  let[apidata,setapidata]=useState([])
  useEffect(()=>{

    axios.get('http://localhost:3000/userdetails')
    .then((res)=>setapidata(res.data));
    

  },[])

  return(
    <>
    
    <h1>hello</h1>

    <table border="4">
      <tr>
        <th>name</th>
        <th>age</th>
        <th>contact</th>
        <th>city</th>
      </tr>
      {
        apidata.map((e)=>(
          <tr>
            <th>{e.name}</th>
            <th>{e.age }</th>
            <th>{e.contact}</th>
            <th>{e.city}</th>
          </tr>

        ))
      }
    </table>
    </>
  )

}
export default App