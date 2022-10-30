import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Node.css';

const NodeComponent = () => {
  return (
    <div className='nodeComponent'>
      <div className='nodeComponent__details'>
        <div className='nodeComponent__backgroundImage'>
          <img src="https://railsware.com/blog/wp-content/uploads/2018/09/2400%D1%851260-rw-blog-node-js.png" alt="node background" />
        </div>
        <h1>Node</h1>
        <ul>
          <li>
            <h4>
              JavaScript v/s Node
            </h4>
            <table className='nodeComponent__table'>
              <thead>
                <tr>
                  <th>
                    JavaScript
                  </th>
                  <th>
                    Node
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Programming Language
                  </td>
                  <td>
                    Interpreter and Environment for JavaScript
                  </td>
                </tr>
                <tr>
                  <td>
                    User for client-side activity for a web app
                  </td>
                  <td>
                    Used for accessing or performing any non-blocking operation of any OS
                  </td>
                </tr>
                <tr>
                  <td>
                    Spider Monkey (firefox), JavaScript Core (Safari) and V8 (Google Chrome)
                  </td>
                  <td>
                    V8 (Google Chrome)
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            Simple and Fast
          </li>
          <li>
            High Scalability
          </li>
          <li>
            Single Threaded
          </li>
          <li>
            No buffering and cross platform
          </li>
          <li>
            <h4>
              Angular v/s Node
            </h4>
            <table className='nodeComponent__table'>
              <thead>
                <tr>
                  <th>
                    Angular
                  </th>
                  <th>
                    Node
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Open Source web app development framework
                  </td>
                  <td>
                    Cross-platform, run-time environment for apps
                  </td>
                </tr>
                <tr>
                  <td>
                    Written in Typescript
                  </td>
                  <td>
                    Written in C, C++ and JavaScript
                  </td>
                </tr>
                <tr>
                  <td>
                    Used for building <strong>Single Page Applications (SPAs)</strong>
                  </td>
                  <td>
                    Used for building fast and scalable server side networking apps
                  </td>
                </tr>
                <tr>
                  <td>
                    It is web app framework
                  </td>
                  <td>
                    It has many different frameworks like partial.js and express.js etc
                  </td>
                </tr>
                <tr>
                  <td>
                    Ideal for creating highly active and interactive web apps
                  </td>
                  <td>
                    Ideal for developing small size projects
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            It uses a single threaded model in order to support async processing
          </li>
          <li>
            With async processing, an application can perform better and is more scalable under web loads
          </li>
          <li>
            It is a virtual machine that uses JavaScript as its scripting language and runs on V8 environment
          </li>
          <li>
            It workson single threaded event loop and a non-blocking input/output which provides high rate as it can handle a higher number of concurrent requests
          </li>
          <li>
            By making use of the <strong><i>HTTP</i></strong> module, It can run on any stand-alone web server
          </li>
          <li>
            Usage of Node
            <ul>
              <li>
                Real-time web app
              </li>
              <li>
                Network app
              </li>
              <li>
                Distributed system
              </li>
              <li>
                General purpose app
              </li>
            </ul>
          </li>
          <li>
            Two types of API functions
            <ul>
              <li>
                Asynchronous, non-blocking functions
              </li>
              <li>
                Synchronous, blocking functions
              </li>
            </ul>
          </li>
          <li>
            <strong><i>package.json</i></strong> is the heart of the entire app
          </li>
          <li>
            It is basically the manifest file that contains the metadata of the project where we define the properties of a package
          </li>
          <li>
            An event loop handles all the asynchronous callbacks in an application
          </li>
          <li>
            This approach mainly follows the publish-subscribe pattern
          </li>
          <li>
            <strong>REPL</strong> is the Node Shell
          </li>
          <li>
            Tasks done asynchronously using event loop
            <ul>
              <li>
                Input/Output operation
              </li>
              <li>
                Heavy computations
              </li>
              <li>
                Blocking operations
              </li>
            </ul>
          </li>
          <li>
            <h4>
              Front End v/s Back End
            </h4>
            <table className='nodeComponent__table'>
              <thead>
                <tr>
                  <th>
                    Front End
                  </th>
                  <th>
                    Back End
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Uses markup and web languages like HTML, CSS and JavaScript
                  </td>
                  <td>
                    Uses programming languages and scripting languages such as Python, Ruby etc
                  </td>
                </tr>
                <tr>
                  <td>
                    Based on asynchronous requests and AJAX
                  </td>
                  <td>
                    Based on server architecture
                  </td>
                </tr>
                <tr>
                  <td>
                    Better accessibility
                  </td>
                  <td>
                    Enhanced security
                  </td>
                </tr>
                <tr>
                  <td>
                    User for <strong>Search Engine Optimization (SEO)</strong>
                  </td>
                  <td>
                    Used for <strong>Backup</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            Major security implementation
            <ul>
              <li>
                Authentication
              </li>
              <li>
                Error Handling
              </li>
            </ul>
          </li>
          <li>
            <strong>Libuv</strong> is a multi-platform support library of Node which majorly is used for asynchronous input/output operations
          </li>
          <li>
            Middleware is function receives the Request and Response Objects
          </li>
          <li>
            express.js is a lightweight and flexible framework that provides a wide range of features for web apps
          </li>
          <li>
            It is built on top of Node
          </li>
        </ul>
      </div>
      <Link className='nodeComponent__link' to='/'>Back to Home</Link>
    </div>
  )
}

export default NodeComponent;