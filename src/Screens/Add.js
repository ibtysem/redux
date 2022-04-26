import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addnewarticle } from '../itekSlice/itekSlice';
const Add = () => {
  const [itek, setitek] = useState([
    {
      id: Math.random(),
      name: "",
      img: "",
      desc: "",
      price:"",
      rate: 0,
    }
  ]);
  const dispatch=useDispatch();
  return (
    <div className='add'>
      <h1>Add new article</h1>
      <input type="text" placeholder='name' 
      onChange={(e) => setitek ({...itek,name:e.target.value})} />
      <input type="text" placeholder='image' 
      onChange={(e)=>setitek({...itek,img:e.target.value})}/>
      <input type="text" placeholder='descreption'
      onChange={(e)=>setitek({...itek,desc:e.target.value})} />
      <input type="value" placeholder='price'
      onChange={(e)=>setitek({...itek,price:e.target.value})} />
      <input type="number" placeholder='rate' 
      onChange={(e)=>setitek({...itek,rate:e.target.value})}/>

      <button onClick={(e)=>{
        e.preventDefault();
        dispatch(addnewarticle(itek));
        toast("article added!");
        }}>
          add new article</button>
    </div>
  )
}

export default Add