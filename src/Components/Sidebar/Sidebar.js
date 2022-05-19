import React from 'react'
import './Sidebar.css'
import { BsHouse } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsPower } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";




import { Link } from 'react-router-dom'


const Sidebar = () => {

  function logOut(){
    sessionStorage.removeItem('userDetails');
  }

//   const openNav = () => {
//     document.getElementById("sidebar").style.width = "220px";
//   }

// const closeNav = () => {
//     document.getElementById("sidebar").style.width = "100px";
    
// }


//     if(window.innerWidth<=992){
//         closeNav()
//     }
    
    


  return (
    <div className="sideBar" >
         
         
        <ul id='sidebarClose'>
          
         <Link style ={{textDecoration: 'none'}}  to = '/dashboard'>   <li> <BsHouse className='icons' id='topp'/> </li> </Link>
         <Link style ={{textDecoration: 'none'}} to= '/team-members'>  <li> <BsPeople className='icons'/> </li> </Link>
         <Link style ={{textDecoration: 'none'}} to= '/clients'>   <li> <BsPerson className='icons'/> </li> </Link>
         <Link style ={{textDecoration: 'none'}} to= '/products'>   <li> <BsStar className='icons'/> </li> </Link>
           {/* <li> <BsBook className='icons'/> Profile</li>  */}
           <Link style ={{textDecoration: 'none'}} onClick={logOut} to= '/'> <li className = 'logOut'> <BsPower className='icons'/> </li> </Link>
        </ul>

        <ul id='sidebar'>
            <li><h1>BlueBerry CRM</h1></li>
         <Link style ={{textDecoration: 'none'}}  to = '/dashboard'>   <li> <BsHouse className='icons'/> Home</li> </Link>
         <Link style ={{textDecoration: 'none'}} to= '/team-members'>  <li> <BsPeople className='icons'/> Team Members</li> </Link>
         <Link style ={{textDecoration: 'none'}} to= '/clients'>   <li> <BsPerson className='icons'/> Clients</li> </Link>
         <Link style ={{textDecoration: 'none'}} to= '/products'>   <li> <BsStar className='icons'/> Products</li> </Link>
           {/* <li> <BsBook className='icons'/> Profile</li>  */}
           <Link style ={{textDecoration: 'none'}} onClick={logOut} to= '/'> <li className = 'logOut'> <BsPower className='icons'/> Log Out</li> </Link>
        </ul>
    </div>
  )
}

export default Sidebar