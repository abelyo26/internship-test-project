import React, {useEffect, useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux/es/exports';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { adduserStart, editteuserStart } from '../Redux/Actions';
import { StyledButton,Styledcancelbutton } from '../Component/Styled-component-button';
import '../Component/adduser.css'




function AddEditUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [EditMode,setEditMode] = useState(false);
  const {id} = useParams();
  const {users} = useSelector(state => state.data)
  const [data,setdata] = useState({
    name:"",
    lastname:"",
    gender:"",
    age:"",
    height:"",
    email:"",
    contact:"",
    address:"",
})

  useEffect(()=>{
    if(id){
      setEditMode(true)
      const singleuser =users.find((item)=>item.id == Number(id))
      setdata({...singleuser})

    }
  },[id])
  

const {name,lastname,gender,age,height,email,contact,address}=data;
const handleinputchange=(e)=>{
  let {name,value}=e.target;
  setdata({...data,[name]:value})
}

const handlesubmit=(e)=>{
  e.preventDefault();
  if(name && lastname && gender && age && height && email && contact && address){
    if(!EditMode){
      dispatch(adduserStart(data))
      navigate('/')
    }else{
      // we cant pass the values directly in the dispach
      // so we do it like the below code as an object
      dispatch(editteuserStart({id,data}))
      setEditMode(false)
      navigate('/')
    }

  }

}


  return (
    <div>
        <div className='addcontainer'>
        {EditMode ? <h2>Edit user</h2>:<h2>Add user</h2>}
        <Container maxWidth="sm">
        <form onSubmit={handlesubmit}>
        <TextField className='textfield' id="outlined-basic" label="First Name" variant="outlined" onChange={handleinputchange} value={name || ""} type="text" name='name'/>
         <br/>
        <TextField className='textfield' id="outlined-basic" label="Last Name" variant="outlined" onChange={handleinputchange} value={lastname || ""} type="text" name='lastname'/>
        <br/>
        <TextField className='textfield' id="outlined-basic" label="Gender" variant="outlined" onChange={handleinputchange} value={gender || ""} type="text" name='gender'/>
        <br/>
        <TextField className='textfield' id="outlined-basic" label="AGE" variant="outlined"  onChange={handleinputchange} value={age || ""} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} name='age' />
        <br/>
        <TextField className='textfield' id="outlined-basic" label="Height" variant="outlined"  onChange={handleinputchange} value={height || ""} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} name='height' />
        <br/>
        <TextField className='textfield' id="outlined-basic" label="Email" variant="outlined"  onChange={handleinputchange} value={email || ""} type="email" name='email'/>
        <br/>
        <TextField className='textfield' id="outlined-basic" label="Contact" variant="outlined"  onChange={handleinputchange} value={contact || ""} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} name='contact' />
        <br/>
        <TextField className='textfield' id="outlined-basic" label="address" variant="outlined"  onChange={handleinputchange} value={address || ""} name='address' />
        <br/>
        <StyledButton className='button' variant="contained" type='submit'>{EditMode ? "Update":"Add user"}</StyledButton>
        <Styledcancelbutton className='button' variant="contained" onClick={()=>navigate('/')}>cancel</Styledcancelbutton>
        </form>
        </Container>
        </div>
    </div>
  )
}

export default AddEditUser
