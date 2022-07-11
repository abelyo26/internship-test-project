import React from 'react';
import './App.css';
import {Routes,Route,useNavigate, Link} from "react-router-dom"
import Home from './Pages/Home';
import UserInfo from './Pages/UserInfo';
import AddEditUser from './Pages/AddEditUser';


function App() {


  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/userinfo/:id' element={<UserInfo/>}/>
        <Route path='/adduser' element={<AddEditUser/>}/>
        <Route path='/edituser/:id' element={<AddEditUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
