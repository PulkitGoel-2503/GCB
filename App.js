import React, { components, useContext } from 'react'

import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom'; 
import Home from './components/Home';
import Login from './components/Login';
import Match from './components/Match';
import Team from './components/Team';
import TeamDetails from './components/TeamDetails';
import { LoginContext } from './components/LoginContext';
import './App.css';
 



function App() {
 const { isLoggedIn } = useContext(LoginContext);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Match" element={isLoggedIn ? <Match/> : <Navigate to="/login" /> } />
        <Route path="/team/" element={<Team />} />
        <Route path="/team/:id" element={<TeamDetails />} />
        <Route path="/Signup" element={<Login />} /> {/* Placeholder for signup */}
      </Routes>
    </Router>
   
  );
};


export default App;