import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className='errorPage'>
      ErrorPage
      <Link className='errorPage__link' to='/'>Back to Home</Link>
    </div>
  )
}

export default ErrorPage;