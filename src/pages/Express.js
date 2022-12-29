import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Express.css';

const ExpressComponent = () => {
  return (
    <div className='expressComponent'>
      <div className='expressComponent__details'>
        <h1>Express</h1>
        <ul>
          <li>
            Express is a free, open-source, lightweight, and fast backend web application framework for Node.js
          </li>
          <li>
            It is designed for building single-page, multi-page, and hybrid web applications and APIs. It is called the de facto standard server framework for Node.js
          </li>
          <li>
            Distinctive features of Express
            <ul>
              <li>
                It can be used to design single-page, multi-page, and hybrid web applications and APIs
              </li>
              <li>
                It allows to set up middleware to respond to HTTP/RESTful Requests
              </li>
              <li>
                It defines a routing table to perform different HTTP operations (method and URL).
              </li>
              <li>
                It allows to dynamically rendering HTML Pages based on passing arguments to templates.
              </li>
              <li>
                It provides high performance because of its ultra-fast I/O. It prepares a thin layer; therefore, the performance is adequate.
              </li>
              <li>
                Its MVC-like structure makes it organize the web application into MVC architecture.
              </li>
              <li>
                It provides good database support. It supports RDBMS as well as NoSQL databases.
              </li>
              <li>
                It is asynchronous and single-threaded.
              </li>
              <li>
                Its robust API makes routing easy.
              </li>
            </ul>
          </li>
          <li>
            Express.js is an automatically prebuilt Node.js framework that facilitates us to create server-side web applications faster and smarter. The main reason for choosing Express is its simplicity, minimalism, flexibility, and scalability characteristics.
          </li>
          <li>
            <table className='reactComponent__table'>
              <thead>
                <tr>
                  <th>
                    Feature
                  </th>
                  <th>
                    Express
                  </th>
                  <th>
                    Node
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Definition
                  </td>
                  <td>
                    Express.js is a lightweight and fast backend web application framework for Node.js
                  </td>
                  <td>
                    Node.js is an open-source and cross-platform that is used to execute JavaScript code outside of a browser
                  </td>
                </tr>
                <tr>
                  <td>
                    Usage
                  </td>
                  <td>
                    Express.js is used to develop complete web applications such as single-page, multi-page, and hybrid web applications and APIs. It uses approaches and principles of Node.js
                  </td>
                  <td>
                    Node.js is used to build server-side, input-output, event-driven apps
                  </td>
                </tr>
                <tr>
                  <td>
                    Features
                  </td>
                  <td>
                    Express has more features than Node.js.
                  </td>
                  <td>
                    Node.js has fewer features as compared to Express.js
                  </td>
                </tr>
                <tr>
                  <td>
                    Building Block
                  </td>
                  <td>
                    Express.js is built on Node.js
                  </td>
                  <td>
                    Node.js is built on Google's V8 engine
                  </td>
                </tr>
                <tr>
                  <td>
                    Written in
                  </td>
                  <td>
                    Express.js is written in JavaScript only
                  </td>
                  <td>
                    Node.js is written in C, C++, and JavaScript language
                  </td>
                </tr>
                <tr>
                  <td>
                    Framework/Platform
                  </td>
                  <td>
                    Express.js is a framework of Node.js based on its functionalities
                  </td>
                  <td>
                    Node.js is a run-time platform or environment designed for server-side execution of JavaScript
                  </td>
                </tr>
                <tr>
                  <td>
                    Controllers
                  </td>
                  <td>
                    Express.js is assigned with controllers
                  </td>
                  <td>
                    Node.js is assigned with controllers
                  </td>
                </tr>
                <tr>
                  <td>
                    Routing
                  </td>
                  <td>
                    Routing is provided in Express.js
                  </td>
                  <td>
                    Routing is not provided in Node.js
                  </td>
                </tr>
                <tr>
                  <td>
                    Middleware
                  </td>
                  <td>
                    Express.js uses middleware to arrange the functions systematically on the server-side
                  </td>
                  <td>
                    Node.js doesn't use any such provision of middleware
                  </td>
                </tr>
                <tr>
                  <td>
                    Coding
                  </td>
                  <td>
                    Express is easy to code and requires less coding time
                  </td>
                  <td>
                    Node.js requires more coding time as compare to Express.js
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            Express application generator will create application skeleton quickly.
            <ul>
              <li>
                The command used is
                <ul>
                  <li>
                    npm install express-generator -g
                  </li>
                  <li>
                    express myApp
                  </li>
                </ul>
              </li>
            </ul>
            It creates files/folders such as
            <ul>
              <li>
                Bin
              </li>
              <li>
                Public
              </li>
              <li>
                Routes
              </li>
              <li>
                Views
              </li>
              <li>
                js
              </li>
              <li>
                json
              </li>
            </ul>
            Now, we have to install all the dependencies mentioned in the package.json file by using the following command:
          </li>
          <li>
            Express uses req, res and next (optional) as arguments
          </li>
        </ul>
      </div>
      <Link className='expressComponent__link' to='/'>Back to Home</Link>
    </div>
  )
}

export default ExpressComponent;