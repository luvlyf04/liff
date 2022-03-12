import axios from "axios"

export const insert = (data)=> {
    return axios.post("https://sheet.best/api/sheets/01ae957e-d32a-44f1-8ad0-0156cde7dc3f",data)
}