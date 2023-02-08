import React from 'react';

import ME from '../assets/me.jpg'

import '../App.css';

const Header = () => {
  return (
   <header>
      <div className='container header__container'>
        <h1>Sky martin</h1>
        <h3 className='text-light'>Fullstack MERN Developer</h3>
        
        <div className='me'>
          <img src={ME} alt='me'/>
        </div>
        <h3>Some things about me</h3>
      </div>

   </header>
  )
}

export default Header