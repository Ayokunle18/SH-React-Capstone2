import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
// import { Routes, Route, Link } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Team from './Pages/Team/Team';
import Clients from './Pages/Clients/Clients';
import Login from './Pages/Log in/Login';
import ProtectedRoutes from './Components/ProtectedRoutes';


function App() {
  return (
    <div >
     
     <BrowserRouter>
    
    <Routes>
      <Route element ={<ProtectedRoutes/>} >
        <Route path='/dashboard' element={<Home/>} />
        <Route path='/team-members' element={<Team/>} />
        <Route path='/clients' element={<Clients/>} />
          <Route path='/products' element={<Products/>} />
   </Route>
   <Route path='/' element={<Login/>} />
   

    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
