import React,{useEffect} from 'react'
import { useNavigate } from 'react-router';
import { StyledButton,Styledcancelbutton} from '../Component/Styled-component-button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch,useSelector } from 'react-redux';
import { deleteuserStart, loadusersStart } from '../Redux/Actions';
import '../Component/style.css'
import { CircularProgress } from '@mui/material';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

function Home() {
    const navigate = useNavigate();

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadusersStart())
    },[])

    const{users} = useSelector(state =>state.data)

    const handledelete=(userid)=>{
        if(window.confirm("are you shure")){
        dispatch(deleteuserStart(userid))
        }
    }

  return (
    <div>
      <h2>Internship Test project</h2>
      <div className='container'>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="center">First Name</StyledTableCell>
            <StyledTableCell align="center">Last Name</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">Age</StyledTableCell>
            <StyledTableCell align="center">Heght</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">contact</StyledTableCell>
            <StyledTableCell align="center">address</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">{user.id}</StyledTableCell>
              <StyledTableCell align="center">{user.name}</StyledTableCell>
              <StyledTableCell align="center">{user.lastname}</StyledTableCell>
              <StyledTableCell align="center">{user.gender}</StyledTableCell>
              <StyledTableCell align="center">{user.age}</StyledTableCell>
              <StyledTableCell align="center">{user.height}</StyledTableCell>
              <StyledTableCell align="center">{user.email}</StyledTableCell>
              <StyledTableCell align="center">{user.contact}</StyledTableCell>
              <StyledTableCell align="center">{user.address}</StyledTableCell>
              <StyledTableCell align="center"><ButtonGroup disableElevation variant="contained"><StyledButton onClick={()=>{navigate(`/edituser/${user.id}`)}}>Edit</StyledButton>
                                            <Styledcancelbutton onClick={()=>{handledelete(user.id)}}>Delete</Styledcancelbutton><StyledButton onClick={()=>{navigate(`/userinfo/${user.id}`)}}>user info</StyledButton></ButtonGroup></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div>
    <StyledButton onClick={()=>{navigate("/adduser")}} variant="outlined">Add user</StyledButton>
    </div>
    </div>
  )
}

export default Home
