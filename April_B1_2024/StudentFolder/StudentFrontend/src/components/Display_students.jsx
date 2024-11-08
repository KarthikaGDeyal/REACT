import React, { useEffect,useState } from 'react';
import { getStudents } from '../Services/api';
import { deleteStudentAPI } from '../Services/api';


const StudentTable = ({refreshRequired,setStudentsId}) => {
    // State to hold movie data (initially empty)
    const [students, setStudents] = useState([]);
   

    function getData(id){
        setStudentsId(id)
    }

    async function studentDelete(id){
        let result=await deleteStudentAPI(id)
        if(result.status>199 && result.status<300){
            listAllStudents()
        }
    }

    
    async function listAllStudents(){
        let result=await getStudents()
        if (result.status>199 && result.status<300){
            setStudents(result.data)
        }
        else{
            console.log("Failed to fetch your data..!!")
        }
        console.log(result)
    }

    useEffect(()=>{
        listAllStudents()
    },[refreshRequired])
    


    // Handle editing a movie
    // const handleEdit = (index) => {
    //     const newTitle = prompt("Enter new title", movies[index]?.title);
    //     const newDirector = prompt("Enter new director", movies[index]?.director);
    //     const newLanguage = prompt("Enter new language", movies[index]?.language);
    //     const newYear = prompt("Enter new year", movies[index]?.year);

    //     if (newTitle && newDirector && newLanguage && newYear) {
    //         const updatedMovies = [...movies];
    //         updatedMovies[index] = {
    //             title: newTitle,
    //             director: newDirector,
    //             language: newLanguage,
    //             year: parseInt(newYear),
    //         };
    //         setMovies(updatedMovies);
    //     }
    // };

    // Handle deleting a movie
    // const movieDelete = (index) => {
    //     const confirmDelete = window.confirm("Are you sure you want to delete this movie?");
    //     if (confirmDelete) {
    //         setMovies(movies.filter((_, i) => i !== index));
    //     }
    // };

    return (
        <div>
            <h2>Student List</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Name</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Age</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Place</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>MobileNo</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Course</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>College</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students && students.map((s, i) => (
                        <tr key={s.id}>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{s.Name}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{s.Age}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{s.Place}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{s.MobileNo}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{s.Course}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{s.College}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                                <button onClick={() => getData(s.id)}>Edit</button>
                                <button onClick={() => studentDelete(s.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentTable;
