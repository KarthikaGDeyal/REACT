import axios from "axios"

const BASE_URL="http://127.0.0.1:8000/employees/"

export async function getEmployees(){
    return await axios.get(BASE_URL)
}

export async function employeeCreateAPI(data){
    console.log(data)
    return await axios.post(BASE_URL)
}

export async function getEmployeeDetailsAPI(id){
    return await axios.get(BASE_URL+`${id}/`)
}

export async function employeeUpdateAPI(id,data){
    return await axios.put(BASE_URL+`${id}/`,data)
}

export async function deleteEmployeeAPI(id){
    return await axios.delete(BASE_URL+`${id}/`)
}





