import React, { useEffect, useState } from 'react';
import axios from 'axios';



export default function Intro(){
const [data, setdata] = useState("");
useEffect(() => {
    getData();
        }, []);

const getData = async () => {
    const intro = await axios.get(`http://localhost:5000/intro`);
    setdata(intro.data);
    console.log(intro.data)
   
}
return(
        <div>
           <ul>
               <li>Name: {data.Name}</li>
               <li>Email: {data.Email}</li>

           </ul>
        </div>
)

}
