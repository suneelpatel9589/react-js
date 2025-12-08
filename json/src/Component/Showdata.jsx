import axios from "axios";
import { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from 'react-toastify';
function Showdata() {

   let  [apidata, setApidata] = useState([]);

   let [shwfrm,setshwfrm]=useState(false)
    let [editfrm,seteditfrm]=useState({})
    




    function dataclear(id){
        axios.delete(`http://localhost:3000/userdetails/${id}`)
        .then(res=>
            toast.success('deleted', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                }))
    }
    function handleedit(e){
        let {name,value} = e.target
        seteditfrm({...editfrm,[name]:value})
    }

    function finalsumbit(e){
        e.preventDefault()
        axios.put(`http://localhost:3000/userdetails/${editfrm.id}`,editfrm)
         .then(res=>
            toast.success('updated data', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                }))
    }

    useEffect(() => {
        axios.get('http://localhost:3000/userdetails')
            .then(res => setApidata(res.data))
            
    }, [dataclear]);

    return (
        <>
            <h1>showdata</h1>

            <table border="">
                
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>city</th>
                        <th>contact</th>
                        <th>email</th>
                        <th>password</th>
                         <th>delete</th>
                          <th>edit</th>
                    </tr>
                    {
                        apidata.map((e) => (
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.city}</td>
                                <td>{e.contact}</td>
                                <td>{e.email}</td>
                                <td>{e.password}</td>
                                <td> <button onClick={()=>dataclear(e.id)}>delete</button></td>
                                <td> <button onClick={()=>(setshwfrm(true),seteditfrm(e))}>edit</button></td>
                                
                            </tr>
                        ))
                    }
                
            </table>
            {
                shwfrm && <form action="" onSubmit={finalsumbit}>
                    <label htmlFor="">id</label>
                    <input type="text" value={editfrm.id} name="id"  onChange={handleedit}/> <br />

                    
                    <label htmlFor="">name</label>
                    <input type="text" value={editfrm.name}  name="name"  onChange={handleedit} /> <br />

                    
                    <label htmlFor="">age</label>
                    <input type="text" value={editfrm.age}  name="age"  onChange={handleedit}/> <br />

                    
                    <label htmlFor="">city</label>
                    <input type="text" value={editfrm.city}   name="city"  onChange={handleedit}/> <br />

                    
                    <label htmlFor="">contact</label>
                    <input type="text"  value={editfrm.contact}  name="contact"  onChange={handleedit}/> <br />


                    
                    <label htmlFor="">email</label>
                    <input type="text" value={editfrm.email}  name="email"  onChange={handleedit} /> <br />

                    
                    <label htmlFor="">password</label>
                    <input type="text" value={editfrm.password}  name="password"  onChange={handleedit} /> <br />

                    <input type="submit" />
                </form>
            }


            <ToastContainer/>
        </>
    );
}

export default Showdata;
