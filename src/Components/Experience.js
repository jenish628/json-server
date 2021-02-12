import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Exp() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const exp = await axios.get(`http://localhost:5000/Experience`);
        setData(exp.data);
        console.log(exp.data[0]);

    }
    return (
        <div>
             {data.map((ex) => (
                <ol>
                    <li>Institution Name: {ex.Institution}</li>
                    <li>Start Date: {ex.StartDate}</li>
                    <li>End Date: {ex.EndDate}</li>
                </ol>

            ))} 

            <Link to={'/add'}> ADD </Link>
        </div>
    )
}

