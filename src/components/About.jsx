import React from 'react';
import ME from '../assets/me.jpg'
import {BsLinkedin} from 'react-icons/bs';
import{FaGithubSquare} from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs';


import '../App.css';

const About = () => {
  return (
   <section id='about'>
    <h2>About Sky</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt='Skylar Smiling'/>
        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
          <a href='https://www.linkedin.com/in/skylar-martin-a50b10191/' target='_blank' rel='noreferrer'className='about__icon'><BsLinkedin/>LinkedIn</a>
           </article> 

          <article className='about__card'>
          <a href='https://github.com/skyman529' target='_blank' rel='noreferrer' className='about__icon'><FaGithubSquare />Github</a>
          </article>

          <article className='about__card'>
          <a href='https://www.facebook.com/Skyman529' target='_blank' rel='noreferrer' className='about__icon'><BsFacebook />Facebook</a>
          </article>
        </div>  
        <p>I am currently in Denver, Colorado with my beautiful wife and daughter, I have chosen to follow the web development 
          career path. Recently, I became a Certified MERN Developer through the University of Denver Bootcamp. 
         Contributing to the future in this field is exciting! My hobbies involve  Working on cars with my friends and 
          Watching as much Comedy as possible.
      </p>
    </div>
    </div>

   </section>
  )
}

export default About