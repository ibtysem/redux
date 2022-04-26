import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Component/Card';

const Home = () => {
  const itek=useSelector((state)=>state.itek.itek);
  return (
    <div className='home'>
      <div className='container'>
      <div className='list-container'>
       {itek.map((el,i)=>(<Card key={i} itek={el}/>))}
       </div>
       </div>
    </div>
  )
}

export default Home