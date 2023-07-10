import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Axios.css';

const AxiosComponent = () => {
  return (
    <div className='axiosComponent'>
      <div className='axiosComponent__details'>
        <h1>Axios</h1>
        <ul>
          <li>
            Axios is a promise-based HTTP client for making asynchronous requests. It works in the browser and in Node.js
          </li>
          <li>
            HTTP is the protocol that allows communication between the web browser and the web server. HTTPS is the secured version of HTTP using SSL to encrypt communication between the two
          </li>
          <li>
            We can send Authorization headers with every request by setting default header as 'axios.default.headers.common['Authorization']' = 'Bearer {`<access_token>`}';
          </li>
          <li>
            We can send Authorization headers with post request method as well by passing as parameters to the method
          </li>
          <li>
            Authentication is important for the applications as it provides data and resource protection from unauthorized access to the application
          </li>
          <li>
            GET Method is generally used when we are trying to retrieve the data from the server and POST Method is used when we are trying to submit the data to the server
          </li>
          <li>
            CORS or Cross Origin Resource Sharing -  is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served
          </li>
          <li>
            CORS is a HTTP request which includes 'Origin' header - it indicates where the request originated from
          </li>
          <li>
            Since Axios is a promised-based HTTP request method, we can used .then() and .catch()
          </li>
          <li>
            Status code 200 indicates that the request was successful, Status code 404 indicates that the resource could not be found and Status code 500 indicates internal server issue
          </li>
          <li>
            Axios is promise-based so we can take advantage of async/await in our code and make it simpler and more readable whereas jQuery is callback-based which can make code more difficult to read and understand
          </li>
          <li>
            Axios supports the standard HTTP methods such as GET, POST, DELETE & PUT as well more specialized methods like PATCH & OPTIONS
          </li>
          <li>
            If we don't set up any handler for error responses from the server, then our app will crash, this is because the default behavior of Axios is to just throw an error when it receives error response from the server
          </li>
          <li>
            Axios supports file uploads
          </li>
        </ul>
      </div>
      <Link className='axiosComponent__link' to='/'>Back to Home</Link>
    </div>
  )
}

export default AxiosComponent;