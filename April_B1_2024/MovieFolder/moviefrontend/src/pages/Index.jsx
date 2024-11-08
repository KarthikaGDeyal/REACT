import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Add_movies from '../components/Add_movies'
import Display_movies from '../components/Display_movies'
function Index() {
  const [refreshRequired,setRefreshRequired]=useState('')
  const [movieId,setMoviesId]=useState('')
  return (
    <div>
      <h1>Index Component</h1>
      <Navbar></Navbar>
      <Add_movies setRefreshRequired={setRefreshRequired} movieId={movieId}></Add_movies>
      <Display_movies refreshRequired={refreshRequired} setMoviesId={setMoviesId}></Display_movies>
    </div>
  )
}

export default  Index
