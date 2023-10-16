import axios from "axios"

const BaseUrl='http://192.168.0.135:4000/user/'


export const registerUser=async(data)=>{
    console.log(data)
   return axios.post(BaseUrl+'register',data)
}
export const loginUser=async(data)=>{
   return axios.post(BaseUrl+'login',data)
}
export const deleteUser=async(id,data)=>{
   return axios.delete(BaseUrl+`users/:${id}`,data)
}