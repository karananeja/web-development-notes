import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Firebase.css';

const FirebaseComponent = () => {
  return (
    <div className='firebaseComponent'>
      <div className='firebaseComponent__details'>
        <h1>Firebase</h1>
        <ul>
          <li>
            It is a platform which is used for building Web, IOS and Android applications.
          </li>
          <li>
            Features of Firebase are
          </li>
          <ul>
            <li>
              Real time database
            </li>
            <li>
              Different APIs
            </li>
            <li>
              Multiple authentication types
            </li>
            <li>
              and Hosting platform
            </li>
          </ul>
        </ul>
      </div>
      <Link className='firebaseComponent__link' to='/'>Back to Home</Link>
    </div>
  )
}

export default FirebaseComponent;