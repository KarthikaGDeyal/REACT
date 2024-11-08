import axios from 'axios'

const BASE_URL="http://127.0.0.1:8000/movies/"


export async function getMovies(){
    return await axios.get(BASE_URL)
}

export async function movieCreateAPI(data){
    console.log(data)
    return await axios.post(BASE_URL,data)
}

export async function getMovieDetailsAPI(id){
    return await axios.get(BASE_URL+`${id}/`)
}

export async function movieUpdateAPI(id,data){
    return await axios.put(BASE_URL+`${id}/`,data)
}

export async function deleteMovieAPI(id){
    return await axios.delete(BASE_URL+`${id}/`)
}