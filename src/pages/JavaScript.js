import React from 'react';
import { Link } from 'react-router-dom';
import '../css/JavaScript.css';

const JavaScriptComponent = () => {
  return (
    <div className='javaScriptComponent'>
      <div className='javaScriptComponent__details'>
        <h1>JavaScript</h1>
        <ul>
          <li>
            It was created by <strong>Brendan Eich</strong> in <i>1995</i>
          </li>
          <li>
            It was initially named <strong><i>Mocha</i></strong>
          </li>
          <li>
            It is an OOP language commonly used to create interactive effects within web browsers
            <ul>
              <li>
                <strong>Java</strong> is complete programming language whereas <strong>JavaScript</strong> is a coded program that can be introduced to HTML pages
              </li>
              <li>
                <strong>Java</strong> is an OOPS or structured programming language like <strong>C++</strong> or <strong>C</strong> whereas <strong>JavaScript</strong> is a client-side scripting language
              </li>
            </ul>
          </li>
          <li>
            <strong>JavaScript</strong> Data-types
            <ul>
              <li>
                Primitive Data-types
                <ul>
                  <li>Undefined</li>
                  <li>Null</li>
                  <li>Boolean</li>
                  <li>Number</li>
                  <li>String</li>
                  <li>Symbol</li>
                </ul>
              </li>
              <li>
                Non-Primitive Data-types
                <ul>
                  <li>Objects</li>
                  <li>Arrays</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            The famous JavaScript keyword <i>this</i> refers to the current context
          </li>
          <li>
            In Strict Mode <i>this</i> is undefined
          </li>
          <li>
            A Callback is a plain JavaScript function passed to some method as an argument or option to be executed later
          </li>
          <li>
            Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope
          </li>
          <li>
            Variable Naming Convention
            <ul>
              <li>
                Do not use any of the JavaScript reserved keyword as a variable name
              </li>
              <li>
                JavaScript variable names should not start with <strong>Number</strong>
              </li>
              <li>
                They are case sensitive
              </li>
            </ul>
          </li>
          <li>
            Attributes provide more details on an element like id, type, value etc
          </li>
          <li>
            Property is the value assigned to the property like type='text', value='name' etc
          </li>
          <li>
            JavaScript is dynamically typed language and works Just-in-time compilation
          </li>
          <li>
            Local Storage will stay until it is manually cleared through settings or program
          </li>
          <li>Maximum limit of data saving in Local Storage is about 5 MB.</li>
          <li>Session storage will leave when the browser is closed</li>
          <li>
            Maximum limit of data saving in Session Storage is about 5 MB.
          </li>
          <li>
            <strong>Note:</strong> If after closing the current tab we press
            ctrl+shift+T for restoring that tab, then ideally in Session Storage
            data should not be there but we can see that Session Storage is
            maintained in the chrome, firefox but not in the safari browser
            while restoring the tab. It is the browser dependent feature while
            restoring the tab.
          </li>
          <li>
            innerText - It will not process an HTML tag if found in a string
          </li>
          <li>
            Strict mode is a way to introduce better error-checking into the code
          </li>
          <li>
            <strong><i>this</i></strong> keyword refers to the object that the method is associated with
          </li>
          <li>
            Two most important parts of the browser are the JavaScript Engine and a Rendering Engine (BLINK)
          </li>
          <li>
            Functions running in parallel with other functions are known as <strong>Asynchronous Functions</strong>
          </li>
          <li>
            <h3>
              Promises
            </h3>
            <ul>
              <li>
                Promise Object contains both the producing code and calls the consuming code
              </li>
              <li>
                Benefits of using Promises
                <ul>
                  <li>
                    Improves code readability
                  </li>
                  <li>
                    Better handling of Asynchronous operations
                  </li>
                  <li>
                    Better error handling
                  </li>
                </ul>
              </li>
              <li>
                There are four states in Promises
                <ul>
                  <li><i>Fulfilled</i></li>
                  <li><i>Rejected</i></li>
                  <li><i>Pending</i></li>
                  <li><i>Settled</i></li>
                </ul>
              </li>
              <li>
                It can be consumed by registering function using <i>.then()</i> and <i>.catch()</i> methods
              </li>
              <li>
                <i>.then()</i> is invoked when a promise is either rejected or resolved
              </li>
              <li>
                Application of Promises
                <ul>
                  <li>
                    It is used for Asynchronous handling of events
                  </li>
                  <li>
                    It is used to handle Asynchronous <i>http</i> requests
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <h4>
              Promises vs Async/Await
            </h4>
            <table className='javaScriptComponent__table'>
              <thead>
                <tr>
                  <th>
                    Promise
                  </th>
                  <th>
                    Async/Await
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Promise is an object representing intermediate state of operation which is guaranteed to complete its execution
                  </td>
                  <td>
                    Async/Await is a syntactic sugar for promises, a code wrapper making the code execute more synchronously
                  </td>
                </tr>
                <tr>
                  <td>
                    It has 4 states - Resolved, Rejected, Pending and Settled
                  </td>
                  <td>
                    It doesn't have any states, it returns a promise either resolved or rejected
                  </td>
                </tr>
                <tr>
                  <td>
                    Error handling is done using <i>.then()</i> and <i>.catch()</i> methods
                  </td>
                  <td>
                    Error handling is done using <i>.then()</i> and <i>.catch()</i> methods
                  </td>
                </tr>
                <tr>
                  <td>
                    Promise chains can become difficult to understand sometimes
                  </td>
                  <td>
                    It makes easier to read and understand the flow of program
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            Callback Hell is also known as the Pyramid of Doom
          </li>
          <li>
            It is a pattern caused by intensively nested callbacks which are unreadable
          </li>
          <li>
            It typically contains multiple nested callback functions which in turn make the code hard to read and debug
          </li>
          <li>
            <h4>
              Difference between <strong>Var</strong>, <strong>Let</strong> and <strong>Const</strong>
            </h4>
            <table className='javaScriptComponent__table'>
              <thead>
                <tr>
                  <th>
                    Var
                  </th>
                  <th>
                    Let
                  </th>
                  <th>
                    Const
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    It is globally scoped or function scoped
                  </td>
                  <td>
                    It is block scoped
                  </td>
                  <td>
                    It is block scoped
                  </td>
                </tr>
                <tr>
                  <td>
                    It can be declared and updated again
                  </td>
                  <td>
                    It can be updated again but not declared once again
                  </td>
                  <td>
                    It neither can be declared nor updated again
                  </td>
                </tr>
                <tr>
                  <td>
                    It is hoisted to the top of the scope and initialized with <i>undefined</i> value
                  </td>
                  <td>
                    It is hoisted to the top of the scope but not initialized
                  </td>
                  <td>
                    It is hoisted to the top of the scope but not initialized
                  </td>
                </tr>
                <tr>
                  <td>
                    It can declared without being initialized
                  </td>
                  <td>
                    It can declared without being initialized
                  </td>
                  <td>
                    It cannot declared without being initialized
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </div>
      <Link className='javaScriptComponent__link' to='/'>Back to Home</Link>
    </div>
  );
};

export default JavaScriptComponent;