import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const defaultValues = {
    Institution: "",
    StartDate: "",
    EndDate: ""
}
function Add () {
    const [values, setValues] = useState(defaultValues);
    
    const history = useHistory();

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value
        }));
    }
    const handleSubmit = (event) => {
        console.log(values);
        event.persist();
        axios.post(`http://localhost:5000/Experience`, values).then(data => [
              history.goBack()
          ]);
    }
    
    return(
        <div>
       
       <input
            id="outlined-input"
            name="Institution"
            label="Institution"
            type="text"
            defaultValue={values.Institution}
            
            variant="outlined"
            onChange={handleChange}
            
        /> Institution Name

        <input
            id="outlined"
            name="StartDate"
            label="Start"
            type="text"
            defaultValue={values.StartDate}
            
            variant="outlined"
            onChange={handleChange}
            
        /> StartDate
        <input
            id="outline"
            name="EndDate"
            label="End"
            type="text"
            defaultValue={values.EndDate}
           
            variant="outlined"
            onChange={handleChange}
        /> End Date
        
        <button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleSubmit}
        > SAVE </button>
        </div>
    )
}

export default Add;

