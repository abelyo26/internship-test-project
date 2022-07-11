import axios from "axios";

export const loadUserApi = async()=> await axios.get("http://localhost:5000/user/")

export const AddUserApi = async(user)=> await axios.post("http://localhost:5000/user/",user)

export const DeleteUserApi = async(userid)=> await axios.delete(`http://localhost:5000/user/${userid}`)

export const EditUserApi = async(userid,data)=> await axios.put(`http://localhost:5000/user/${userid}`,data)