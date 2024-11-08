import React, { useEffect,useState } from 'react';
import { getMovies } from '../Services/api';
import { deleteMovieAPI } from '../Services/api';


const MovieTable = ({refreshRequired,setMoviesId}) => {
    // State to hold movie data (initially empty)
    const [movies, setMovies] = useState([]);
   

    function getData(id){
        setMoviesId(id)
    }

    async function movieDelete(id){
        let result=await deleteMovieAPI(id)
        if(result.status>199 && result.status<300){
            listAllMovies()
        }
    }

    
    async function listAllMovies(){
        let result=await getMovies()
        if (result.status>199 && result.status<300){
            setMovies(result.data)
        }
        else{
            console.log("Failed to fetch your data..!!")
        }
        console.log(result)
    }

    useEffect(()=>{
        listAllMovies()
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
            <h2>Movie List</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Title</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Director</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Language</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Year</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {movies && movies.map((m, i) => (
                        <tr key={m.id}>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{m.Title}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{m.Director}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{m.Language}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{m.Year}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                                <button onClick={() => getData(m.id)}>Edit</button>
                                <button onClick={() => movieDelete(m.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MovieTable;
