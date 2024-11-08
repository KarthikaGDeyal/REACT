import React, { useEffect,useState } from 'react';
import { employeeCreateAPI } from '../Services/api';
import { getEmployeeDetailsAPI } from '../Services/api';

const AddEmployees = ({ setRefreshRequired, employeeId }) => {
  const [employee, setEmployee] = useState({
    Name: '',
    Position: '',
    Location: '',
    Age: '',
  });

  useEffect(()=>{
    getEmployeeData(employeeId)
},[employeeId])

  async function getEmployeeData(employeeId){
    let result=await getEmployeeDetailsAPI(employeeId)
    if(result.status>199 && result.status<300){
      setEmployee(result.data)
    }
  }

  async function addNewEmployees(event){
    event.preventDefault()

    if (movieId) {
      let result = await movieUpdateAPI(movieId, movie);
      console.log(result);
      setRefreshRequired("reload");
    
    }else {  

      let result=await employeeCreateAPI(movie)
      console.log(result)
      setRefreshRequired("reload")
  }
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Added:', employee);
    // Reset form after submission
    setEmployee({ name: '', position: '', location: '', age: '' });
  };

  return (
    <form action ="#" onSubmit={addNewEmployees} style={styles.form}>
      <div style={styles.inputGroup}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={employee.Name} // Corrected to employee.name
          onChange={(e)=>setEmployee({...employee,Name:e.target.value})}
          required
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          name="position"
          value={employee.Position}
          onChange={(e)=>setEmployee({...employee,Position:e.target.value})}
          required
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={employee.Location}
          onChange={(e)=>setEmployee({...employee,Location:e.target.value})}
          required
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={employee.Age}
          onChange={(e)=>setEmployee({...employee,Age:e.target.value})}
          required
          min="0" // Corrected min value
          max={new Date().getFullYear()}
        />
      </div>

      <button type="submit" style={styles.button}>
        Add Employee
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
  },
  inputGroup: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AddEmployees;
