//import logo from './logo.svg';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Issues from './components/Issues';
import Login from './components/Login';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import Register from './components/Register';
import Track from './components/Track';
import Authorisor from './components/Auth';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <NavBar />
      <Routes>
<Route element={<Home></Home>} path="/Home"/> 
<Route element={<Login></Login>} path="/Login"/>
<Route element={<Register></Register>} path="/Register" />
<Route element={<Authorisor> <Issues/> </Authorisor>} path="/Issues" />
<Route element={<Authorisor> <Track/> </Authorisor>} path="/Track" />

<Route element={<Navigate to="/Login"/>} path="/" /> 
 
 <Route element={ <NotFound />} path="*" />
 

</Routes>
      
      </BrowserRouter>
         </div>
  );
}

export default App;
