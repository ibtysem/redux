import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='nav-container'>
      <img src="https://www.itechstore.tn/img/itech-store-logo-1545673222.jpg" alt="logo" />
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/">mac</Link></li>
            <li><Link to="/">iphone</Link></li>
            <li><Link to="/">watch</Link></li>
            <li><Link to="/">accessoires</Link></li>
        </ul>
        <ul>
            <li><Link to="/prefervente">connexion</Link></li>
            <li className='btn-primary'>
                <Link to="/add">Add article</Link>
            </li>

        </ul>
      </div>

    </div>
  )
  }

export default Navbar