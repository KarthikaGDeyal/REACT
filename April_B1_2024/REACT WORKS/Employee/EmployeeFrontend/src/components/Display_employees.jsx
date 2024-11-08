import React, { useEffect,useState } from 'react';
import { getEmployees } from '../Services/api';

const EmployeeTable = ({refreshRequired}) => {
    // State to hold employee data (initially empty)
    const [employees, setEmployees] = useState([]);
    async function listAllEmployees(){
        let result=await getEmployees()
        if (result.status>199 && result.status<300){
            setEmployees(result.data)
        }
        else{
            console.log("Failed to fetch your data..!!")
        }
        console.log(result)
    }
    useEffect(()=>{
        listAllEmployees()
    },[refreshRequired])

    // Handle editing an employee
    const handleEdit = (index) => {
        const newName = prompt("Enter new name", employees[index]?.name);
        const newPosition = prompt("Enter new position", employees[index]?.position);
        const newLocation = prompt("Enter new location", employees[index]?.location);
        const newAge = prompt("Enter new age", employees[index]?.age);

        if (newName && newPosition && newLocation && newAge) {
            const updatedEmployees = [...employees];
            updatedEmployees[index] = {
                name: newName,
                position: newPosition,
                location: newLocation,
                age: parseInt(newAge),
            };
            setEmployees(updatedEmployees);
        }
    };

    // Handle deleting an employee
    const handleDelete = (index) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
        if (confirmDelete) {
            setEmployees(employees.filter((_, i) => i !== index));
        }
    };

    return (
        <div>
            <h2>Employee List</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Name</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Position</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Location</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Age</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees && employees.map((e,i) => (
                        <tr>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{e.Name}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{e.Position}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{e.Location}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{e.Age}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                                <button onClick={() => handleEdit()}>Edit</button>
                                <button onClick={() => handleDelete()}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;
