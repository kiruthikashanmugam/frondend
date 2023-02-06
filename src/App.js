
import './App.css';

import Login from './components/Login';
import Home from './components/Home';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom"



function App() {


  return (


    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>

            <li><Link to="/Home">Home</Link></li>
            <li ><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path='/Home' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>

    </BrowserRouter>

      
   
  );
}

export default App;
