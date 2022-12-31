import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <h4 className='home__title'>
        Web Development Notes
      </h4>
      <div className='home__links'>
        <Link className='home__link' to='/oopsconcepts'>Oops Concepts Notes</Link>
        <Link className='home__link' to='/javascript'>JavaScript Notes</Link>
        <Link className='home__link' to='/react'>React Notes</Link>
        <Link className='home__link' to='/node'>Node Notes</Link>
        <Link className='home__link' to='/axios'>Axios Notes</Link>
        <Link className='home__link' to='/express'>Express Notes</Link>
        <Link className='home__link' to='/firebase'>Firebase Notes</Link>
      </div>
    </div>
  );
};

export default Home;