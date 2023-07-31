import './NavBar.css'
import { useState } from 'react'

const NavBar = () => {

  return (
    <main className='main grid'>
      <div className='div'>
        <a href='#home' className='nav__logo'><i className='bx bxs-cat' ></i></a>

        <nav className='nav'>
          <ul className='nav__menu'>
            <li className='navbar-item'>
              <a href='#home' className='nav__link'>Home</a>
            </li>
            <li className='navbar-item'>
              <a href='#about' className='nav__link'>About</a>
            </li>
            <li className='navbar-item'>
              <a href='#services' className='nav__link'>Services</a>
            </li>
            <li className='navbar-item'>
              <a href='#portfolio' className='nav__link'>Portfolio</a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  )
}

export default NavBar