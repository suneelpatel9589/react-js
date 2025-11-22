import { useState } from "react"

function Home(){
    let[person,SetPerson]=useState([
        {
            name:"suneel",age:23,city:"satna"
        },
        {
            name:"krish",age:28,city:"bhopal"
        },
        {
            name:"raj",age:26,city:"rewa"
        }

    ])
    return(
        <>
        
        <h1>home</h1>
        {
            person.map((e)=>{return <h1>{e.age}</h1>})
        }
        
        </>
    )
}
export default Home