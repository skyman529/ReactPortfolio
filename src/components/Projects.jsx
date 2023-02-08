import React from 'react';
import Project1 from '../assets/myproject.jpg'
import Project2 from '../assets/myproject2.jpg'
import Project3 from '../assets/myproject3.jpg'




const Projects = () => {
  return (
   <section id='scrollhere'>
    <h2>Some of Sky's completed projects</h2>

    <div className='container project__container'>
      <div className='about__project'>
        <div className='about__project-image'>
          <img src={Project1} alt='Project1'/>
        </div>
      </div>
        <p>A poke tracker app for keeping track of all your pokemon's across all your pokemon game's
      </p>
    </div>
    <div className='container project__container'>
      <div className='about__project'>
        <div className='about__project-image'>
          <img src={Project2} alt='Project2'/>
        </div>
      </div>
        <p>A poke tracker app for keeping track of all your pokemon's across all your pokemon game's
      </p>
    </div>  <div className='container project__container'>
      <div className='about__project'>
        <div className='about__project-image'>
          <img src={Project3} alt='Project3'/>
        </div>
      </div>
        <p>A poke tracker app for keeping track of all your pokemon's across all your pokemon game's
      </p>
    </div>
    

   </section>
  )
}

export default Projects