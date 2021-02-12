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
        event.persist();
        await axios.delete(`http://localhost:5000/Education/${id}`).then(data_ => {
            getData();
        })

    }

    return (
        <>
            <>
                {data.map((ex) => (
                    <ul>
                        <li>INSTITUTION-NAME:   {ex.Institution}</li>
                        <li>COURSE: {ex.Course}</li>
                        <li>GRADE: {ex.Grade}</li>
                    </ul>
                )) }
                
                <Link to={'/addedu'}> ADD </Link>
                <button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={deleteEducation}
                > DELETE </button>
           
            </> 
        </>
    )
}
