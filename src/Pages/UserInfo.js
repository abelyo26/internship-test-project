import React from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Button from '@mui/material/Button';
import {Styledcancelbutton } from '../Component/Styled-component-button';
import '../Component/userdetail.css'



function UserInfo() {
    const {users} = useSelector(state => state.data)
    const {id} =useParams()
    const navigate = useNavigate()
    const singleuser = users.find((item)=>item.id === Number(id))
  return (
    <div>
        <div className='detailcontainer'>
        <h2>user detail</h2>
         <p>ID: {singleuser.id}</p>
        <p>First Name: {singleuser.name}</p>
        <p>Last Name: {singleuser.lastname}</p>
        <p>Gender: {singleuser.gender}</p>
        <p>Age: {singleuser.age}</p>
        <p>Height: {singleuser.height}</p>
        <p>Email: {singleuser.email}</p>
        <p>Contact: {singleuser.contact}</p>
        <p>Address: {singleuser.address}</p>
        <Styledcancelbutton className='button' variant="contained" onClick={()=>navigate('/')}>Back</Styledcancelbutton>
        </div>
      
    </div>
  )
}

export default UserInfo
