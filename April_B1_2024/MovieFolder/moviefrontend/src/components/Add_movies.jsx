import React, { useEffect, useState } from 'react';
import { movieCreateAPI, movieUpdateAPI } from '../Services/api';
import { getMovieDetailsAPI } from '../Services/api';

const AddMovieForm = ({ setRefreshRequired, movieId }) => {
  const [movie, setMovies] = useState({
    Title: '',
    Director: '',
    Language: '',
    Year: '',
  });

  
  useEffect(()=>{
    getMovieData(movieId)
},[movieId])

  async function getMovieData(movieId){
    let result=await getMovieDetailsAPI(movieId)
    if(result.status>199 && result.status<300){
      setMovies(result.data)
    }
  }

  async function addNewMovies(event) {
    event.preventDefault();

    if (movieId) {
      let result = await movieUpdateAPI(movieId, movie);
      console.log(result);
      setRefreshRequired("reload");
    } else {
      let result = await movieCreateAPI(movie);
      console.log(result);
      setRefreshRequired("reload");
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovies((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  return (
    <form action="#" onSubmit={addNewMovies} style={styles.form}>
      <div style={styles.inputGroup}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="Title"
          value={movie.Title}
          onChange={(e)=>setMovie({...movie,Title:e.target.value})}
          required
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="director">Director:</label>
        <input
          type="text"
          id="director"
          name="Director"
          value={movie.Director}
          onChange={(e)=>setMovie({...movie,Director:e.target.value})}
          required
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="language">Language:</label>
        <input
          type="text"
          id="language"
          name="Language"
          value={movie.Language}
          onChange={(e)=>setMovie({...movie,Language:e.target.value})}
          required
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          name="Year"
          value={movie.Year}
          onChange={(e)=>setMovie({...movie,Year:e.target.value})}
          required
          min="1900"
          max={new Date().getFullYear()}
        />
      </div>

      <button type="submit" value="submit" style={styles.button}>
        Add Movie
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

export default AddMovieForm;
