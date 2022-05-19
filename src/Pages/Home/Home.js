import React from 'react'
import Chart from '../../Components/Overview/Chart'
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
     <div className>
       <Chart/>
     </div>
     
    </div>
    
    </div>
  )
}

export default Home