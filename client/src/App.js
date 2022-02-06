import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NoteState from './context/NoteState';
import { Login } from './components/Login';
import { useState } from 'react';
import UpdateNote from './components/UpdateNote';
import CreateUser from './components/CreateUser';


function App() {
  return (
    <>
    <NoteState>
      <Router>
        <NavBar/>
        <switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route  path="/about">
            <About/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/updateNote/:id">
            <UpdateNote/>
          </Route>
          <Route path="/createuser">
            <CreateUser/>
          </Route>
        </switch>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
