import React, { useEffect, useState } from 'react';
 import { studentCreateAPI, studentUpdateAPI } from '../Services/api';
 import { getStudentDetailsAPI } from '../Services/api';

const AddStudentForm = ({ setRefreshRequired, studentId }) => {
  const [student, setStudents] = useState({
    Name: '',
    Age: '',
    Place: '',
    MobileNo: '',
    Course: '',
    College: '',
  });

  
  useEffect(()=>{
    getStudentData(studentId)
},[studentId])

  async function getStudentData(studentId){
    let result=await getStudentDetailsAPI(studentId)
    if(result.status>199 && result.status<300){
      setStudents(result.data)
    }
  }

  async function addNewStudents(event) {
    event.preventDefault();

    if (studentId) {
      let result = await studentUpdateAPI(studentId, student);
      console.log(result);
      setRefreshRequired("reload");
    } else {
      let result = await studentCreateAPI(student);
      console.log(result);
      setRefreshRequired("reload");
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudents((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  return (
    <form action="#" onSubmit={addNewStudents} style={styles.form}>
      <div style={styles.inputGroup}>
        <label htmlFor="titl">Name:</label>
        <input
          type="text"
          id="name"
          name="Name"
          value={student.Name}
          onChange={(e)=>setStudents({...student,Name:e.target.value})}
          required
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="Age">Age:</label>
        <input
          type="text"
          id="age"
          name="Age"
          value={student.Age}
          onChange={(e)=>setStudents({...student,Age:e.target.value})}
          required
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="place">Place:</label>
        <input
          type="text"
          id="place"
          name="place"
          value={student.Place}
          onChange={(e)=>setStudents({...student,Place:e.target.value})}
          required
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="mobileno">MobileNo:</label>
        <input
          type="number"
          id="mobileno"
          name="MobileNo"
          value={student.MobileNo}
          onChange={(e)=>setStudents({...student,MobileNo:e.target.value})}
          required
        //   min="1900"
        //   max={new Date().getFullYear()}
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="course">Course:</label>
        <input
          type="text"
          id="course"
          name="course"
          value={student.Course}
          onChange={(e)=>setStudents({...student,Course:e.target.value})}
          required
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="college">College:</label>
        <input
          type="text"
          id="college"
          name="college"
          value={student.College}
          onChange={(e)=>setStudents({...student,College:e.target.value})}
          required
        />
      </div>

      <button type="submit" value="submit" style={styles.button}>
        Add Student
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

export default AddStudentForm;
