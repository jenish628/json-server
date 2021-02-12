import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const defaultValues = {
    Institution: "",
    Course: "",
    Grade:""
}
function Addedu () {
const [data, setData] = useState(defaultValues);
const history = useHistory();

const handleChange = (event) => {
    event.persist();
    setData(data => ({
        ...data,
        [event.target.name]: event.target.value
    }));
}
const handleSubmit = (event) => {
    console.log(data);
    event.persist();
    axios.post(`http://localhost:5000/education`, data).then(data => [
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
         defaultValue={data.Institution}
         
         variant="outlined"
         onChange={handleChange}
         
     /> Institution Name

     <input
         id="outlined"
         name="Course"
         label="course"
         type="text"
         defaultValue={data.Course}
         
         variant="outlined"
         onChange={handleChange}
         
     /> Course
     <input
         id="outline"
         name="Grade"
         label="grade"
         type="text"
         defaultValue={data.Grade}
        
         variant="outlined"
         onChange={handleChange}
     /> Grade
     
     <button
     variant="contained"
     color="primary"
     size="large"
     onClick={handleSubmit}
     > SAVE </button>
     </div>
 )

}
export default Addedu;