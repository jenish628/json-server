import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Education() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const edu = await axios.get('http://localhost:5000/Education');
        setData(edu.data);
        console.log(edu.data[0]);
    }
    const deleteEducation = async (event, id) => {
        await axios.delete(`http://localhost:5000/Education/${id}`).then(data_ => {
            getData();
        })

    }

    return (
        <>
            <>
                {data.map((ex) => (
                    <>
                    <ul>
                        <li>INSTITUTION-NAME:   {ex.Institution}</li>
                        <li>COURSE: {ex.Course}</li>
                        <li>GRADE: {ex.Grade}</li>
                    </ul>
                    <button type="submit"
                    onClick={e => deleteEducation(e, ex.id)}
                > DELETE </button>
                    </>
                )) }
                
                <Link to={'/addedu'}> ADD </Link>
                
           
            </> 
        </>
    )
}
