
import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Screens/Home';
import Meilleurvente from './Component/Meilleurvente';
import { ToastContainer } from 'react-toastify';
import Add from './Screens/Add';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/prefervente' element={<Meilleurvente/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
} 

export default App;
