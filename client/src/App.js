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
          <Route exact path="/about">
            <About/>
          </Route>
        </switch>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
