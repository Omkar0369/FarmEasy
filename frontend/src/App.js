import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
      <Router>
    <div className="App">
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path='/register' element={<Register />} />
        </Routes>
     <Footer/>
     </div>
      </Router>
  );
}

export default App;
