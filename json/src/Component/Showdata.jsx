import axios from "axios";
import { useEffect, useState } from "react";

function Showdata() {
  const [frmdata, setfrmdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/userdata")
    .then(res => setfrmdata(res.data))
    
    
  }, []);


  return (
    <>
      <h2>User Data Table</h2>

      <table border="" width="100%" height="100%">
        
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Contact</th>
            <th>City</th>
           
          </tr>
        


           {frmdata.map(item => (
            
            <tr>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.contact}</td>
              <td>{item.city}</td>
            </tr>
        
          ))}
    
        
      </table>
    </>
  );
}

export default Showdata;
