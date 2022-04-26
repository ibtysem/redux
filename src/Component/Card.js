import React from 'react'
import { useDispatch } from 'react-redux'
import { count ,addtolist} from '../itekSlice/itekSlice'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  


const Card = ({itek}) => {
  const dispatch=useDispatch();
  const notify = () => toast("article added!");
  return (
    <div className='card'>
        <img src={itek.img} alt="" />
        <h3>{itek.name}</h3>
        <p>{itek.desc.slice(0,30)}</p>
        < div className='card-container'>
         <h5>{itek.price}</h5>

        <div className='card-rate'> 
          <h5>{itek.rate}</h5>
         <button onClick={
           ()=>{dispatch(count(itek.id));
           dispatch(addtolist(itek));
          notify();
          }
        }>
          add</button>
         </div>
        </div>

    </div>
  )
}

export default Card