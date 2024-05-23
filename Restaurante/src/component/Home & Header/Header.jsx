import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='header'>
        <nav>
            <span className='nav-link'><Link to="/menu">Home</Link> </span>
            <span className='nav-link'><Link to="/reserve">Reserve</Link> </span>
            <span className='nav-link'><Link to="/">Menu</Link> </span>
        </nav>
    </div>
  )
}

export default Header