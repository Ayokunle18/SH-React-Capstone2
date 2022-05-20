import React from 'react'
import Chart from '../../Components/Overview/Chart'
import Orders from '../../Components/Overview/Orders'
import Overview from '../../Components/Overview/Overview'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Home.css'

const Home = () => {
  return (
    <div id='home'>
      <Sidebar/>
    <div className='home'>
     <div className='top'>
     <Overview/>
      <Overview/>
      <Overview/>
       
     </div>
     <div className='order'>
       <Orders/>
     </div>
     
    </div>
    
    </div>
  )
}

export default Home