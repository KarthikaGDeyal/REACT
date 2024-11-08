import axios from 'axios'

const BASE_URL="http://127.0.0.1:8000/students/"


export async function getStudents(){
    return await axios.get(BASE_URL)
}

export async function studentCreateAPI(data){
    console.log(data)
    return await axios.post(BASE_URL,data)
}

export async function getStudentDetailsAPI(id){
    return await axios.get(BASE_URL+`${id}/`)
}

export async function studentUpdateAPI(id,data){
    return await axios.put(BASE_URL+`${id}/`,data)
}

export async function deleteStudentAPI(id){
    return await axios.delete(BASE_URL+`${id}/`)
}