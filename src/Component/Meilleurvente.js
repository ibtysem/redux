import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';

const Meilleurvente = () => {
    const mylist=useSelector(state=>(state.itek.myList))
    console.log(mylist)
  return (
    <div className='meilleur-vente'>
        <h1>Mes Meilleurs vente</h1>
        <div className='list'>
    <div className='list-vente'>
     {mylist.length ?(
         mylist.map((el)=><Card itek={el}/>)
     ):( 
      <h1>list is empty</h1>
     )}
     </div>
     </div>
     </div>
  )
}

export default Meilleurvente