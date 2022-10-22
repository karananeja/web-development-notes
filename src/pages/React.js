import React from 'react';
import { Link } from 'react-router-dom';
import '../css/React.css';

const ReactComponent = () => {
  return (
    <div className='reactComponent'>
      <div className='reactComponent__details'>
        <h1>React</h1>
        <ul>
          <li>
            Current Version of <strong>React - v18.2.0</strong>
          </li>
          <li>
            Current Version of <strong>Node - v16.14.2</strong>
          </li>
          <li>
            Current Version of <strong>JavaScript - ES6</strong>
          </li>
          <li>
            <h4>
              Virtual DOM v/s Real DOM
            </h4>
            <table className='reactComponent__table'>
              <thead>
                <tr>
                  <th>
                    Virtual DOM
                  </th>
                  <th>
                    Real DOM
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Changes can be made easily
                  </td>
                  <td>
                    Changes can be expensive
                  </td>
                </tr>
                <tr>
                  <td>
                    Minimal Memory Wastage
                  </td>
                  <td>
                    High Demand for Memory and more Wastage
                  </td>
                </tr>
                <tr>
                  <td>
                    JSX element is updated
                  </td>
                  <td>
                    Creates a new DOM everytime an element gets updated
                  </td>
                </tr>
                <tr>
                  <td>
                    Cannot update HTML
                  </td>
                  <td>
                    Able to directly manipulate HTML
                  </td>
                </tr>
                <tr>
                  <td>
                    Faster updates
                  </td>
                  <td>
                    Slow updates
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            React is widely used JavaScript library that was launched in 2011, was created at Facebook and primarily used for Front End Development
          </li>
          <li>
            React uses the component-based approach, which ensures to help us build components that possess high reusability
          </li>
          <li>
            React is well known for developing and designing complex mobile user interfaces and web application
          </li>
          <li>
            React renderer like react-dom for web and react-native for native environment (mobile interface)
          </li>
          <li>
            A virtual DOM is a simple JavaScript Object that is the exact copy of the corresponding real DOM
          </li>
          <li>
            Using the render function in React, it creates a node tree and updates it based on the changes occured in the data model
          </li>
          <li>
            These changes are usually triggered by users or the actions caused by the system
          </li>
          <li>
            React has multiple features that are unique for the purposes its used
            <ul>
              <li>
                React makes use of a single-direction data flow model (child components are not able to update data from the parent component)
              </li>
              <li>
                It deals with complete server-side data processing and handling
              </li>
              <li>
                It uses Virtual DOM that has many advantages of it own
              </li>
            </ul>
          </li>
          <li>
            JSX is the abbreviation of JavaScript XML, It is a file that is used in React to bring out the essence of JavaScript to React and use it for its advantages
          </li>
          <li>
            It even includes bringing out HTML and the easy syntax of JavaScript
          </li>
          <li>
            Browsers cannot read JSX files directly
          </li>
          <li>
            It can only read the objects provided by JavaScript
          </li>
          <li>
            Now to make a browser read a JSX file, it has to be transformed to a JavaScript Object using JSX transformers (Babel)
          </li>
          <li>
            React provides users with an ample number of advantages
            <ul>
              <li>
                With React, UI testing becomes very easy
              </li>
              <li>
                React can integrate with Angular and other frameworks easily
              </li>
              <li>
                React can be used for both client-side and server-side requirements
              </li>
              <li>
                It boosts application performance and overall efficiency
              </li>
              <li>
                The high readability index ensures easy-understanding
              </li>
            </ul>
          </li>
          <li>
            Writing code is complicated as it uses JSX and inline template formatting
          </li>
          <li>
            Beginners might find it tough to cope with its syntax and methods
          </li>
          <li>
            The library contains a huge repository of information which might be overwhelming
          </li>
          <li>
            React is a simple library and not a complete framework, hence calls for dependencies
          </li>
          <li>
            In React, components are foundations used to build user interfaces for application
          </li>
          <li>
            With the component system based in places all of the individual entities become completely reusable and independent of each other
          </li>
          <li>
            Rendering the application is easy and not dependent on the other components of the UI
          </li>
          <li>
            Rendering is an important aspect of React, as every single component must be rendered. This is done using <strong><i>render()</i></strong> function
          </li>
          <li>
            Once the function is called, it returns an element that represents a DOM Component
          </li>
          <li>
            It is also possible to render more than one HTML Element at a time by enclosing the HTML tags and passing it through render function
          </li>
          <li>
            States form to be one of the vital objects of React, It is considered as a source of data or objects that control the aspects such as component behaviour and rendering
          </li>
          <li>
            In React, states are used to easily create dynamic and interactive components
          </li>
          <li>
            Props are read-only components that are immutable in nature
          </li>
          <li>
            In an application, props follow a hierarchy that is passed down from parents to child components
          </li>
          <li>
            However the reverse is not allowed because of uni-directional flow of data
          </li>
          <li>
            An arrow function is used to write an expression in React. It allows users to manually bind components easily. The functionality of arrow functions can be very useful when you are working with higher-order functions particularly
          </li>
          <li>
            Higher-Order Components (HOCs) are a widely used technique in React for applying concepts that involve the component reusability logic
          </li>
          <li>
            They are not a native part of the React API and allow users to easily reuse the code
          </li>
          <li>
            Redux is used to store the state of application in a single entity. This simple entity is usually a JavaScript Object. Changing states can be done by pushing out actions from the application and writing corresponding objects for them that are used to modify the states
          </li>
          <li>
            All of the data is retained by Redux (Also called Store)
          </li>
          <li>
            Three phases of component life cycle in React
            <ul>
              <li>
                <strong><i>Initial Rendering</i></strong> - This is the phase that involves the beginning of the journey of component of DOM
              </li>
              <li>
                <strong><i>Update</i></strong> - Here the component can be updated and rendered again if required after it gets added to the DOM
              </li>
              <li>
                <strong><i>Unmounting</i></strong> - The final phase involves the destruction of the component and its eventual removal from the DOM
              </li>
            </ul>
          </li>
          <li>
            <h4>
              Flux v/s Redux
            </h4>
            <table className='reactComponent__table'>
              <thead>
                <tr>
                  <th>
                    Flux
                  </th>
                  <th>
                    Redux
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Has a dispatcher
                  </td>
                  <td>
                    No dispatcher
                  </td>
                </tr>
                <tr>
                  <td>
                    Single store
                  </td>
                  <td>
                    Multiple stores
                  </td>
                </tr>
                <tr>
                  <td>
                    Mutable state
                  </td>
                  <td>
                    Immutable state
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            Any AJAX Library, such as axios and jQuery AJAX can be used with React easily
          </li>
          <li>
            Stateful components are entities that store the changes that happen and place them into the memory
          </li>
          <li>
            <strong><i>refs</i></strong> is the shorthand for reference in React, <i>refs</i> are used to store a reference to a single React element or a React component. This is later returned using the render function
          </li>
          <li>
            The mainly used scenarios are
            <ul>
              <li>
                To initiate imperative animations
              </li>
              <li>
                To join third-party DOM libraries
              </li>
              <li>
                To manage focus and apply media playback
              </li>
            </ul>
          </li>
          <li>
            Controlled components in React refer to the components that have the ability to maintain their state
          </li>
          <li>
            The data is completely controlled by the parent component, and the current value is fetched by making use of props
          </li>
          <li>
            This is done to notify about the changes that occur when using callbacks
          </li>
          <li>
            <strong>Router</strong> - It is very much necessary in React as it is used to manage mulitple routers whenever a user types in a URL. If the route is present in the router for the corresponding URL, then the user is taken to the particular route
          </li>
          <li>
            The Router library needs to be added in React <i>('react-router-dom')</i>
          </li>
          <li>
            Redux consists of four main components
            <ul>
              <li>
                <strong>Action</strong> - An object that describes the call
              </li>
              <li>
                <strong>Reducer</strong> - The state changes storage unit
              </li>
              <li>
                <strong>Store</strong> - The state and object tree storage
              </li>
              <li>
                <strong>View</strong> - Displays data provided by the store
              </li>
            </ul>
          </li>
          <li>
            Advantages of Redux
            <ul>
              <li>
                Organised approach
              </li>
              <li>
                Testing ability
              </li>
              <li>
                Tools
              </li>
              <li>
                Community
              </li>
            </ul>
          </li>
          <li>
            Disadvantages of using MVC in React
            <ul>
              <li>
                A lot of memory wastage occurs
              </li>
              <li>
                DOM manipulation costs a lot
              </li>
              <li>
                The application becomes slow
              </li>
              <li>
                Lot of dependencies
              </li>
              <li>
                The complexity of model increases
              </li>
            </ul>
          </li>
          <li>
            Pure Components are singular entities that are written in React
          </li>
          <li>
            They are fast and simple to write and have the ability to replace a component that has only the <i>render()</i> function
          </li>
          <li>
            Higher-Order Components (HOCs) are used for such as -
            <ul>
              <li>
                Manipulation of props
              </li>
              <li>
                State manipulation and abstraction
              </li>
              <li>
                Render high jacking
              </li>
              <li>
                Code reusing
              </li>
            </ul>
          </li>
          <li>
            <strong><i>Keys</i></strong> are used in React to check all items and to track changes actively
          </li>
          <li>
            They are used to directly check if an item has been added or removed from a list
          </li>
          <li>
            A <strong><i>Controlled Component</i></strong> as the name suggests, it is a component over which React has complete control
          </li>
          <li>
            It is the singular point of data for the forms
          </li>
          <li>
            An <strong><i>Uncontrolled Component</i></strong> is one where the form data gets handled by DOM and not the React Component
          </li>
          <li>
            This is usually done using <i>refs</i> in React
          </li>
          <li>
            Strict mode renders components twice in order to detect any problems with the code and warn about them because of wrapping main component with <strong><i>{`<StrictMode>`}</i></strong> in index.js file
          </li>
          <li>
            The cause of slow rendering in React is mostly because of the number of re-render operations
            <ul>
              <li>
                React.memo()
              </li>
              <li>
                Pure Component
              </li>
            </ul>
          </li>
          <li>
            There is a way in which we can add attributes to a React Component when certain conditions are met
          </li>
          <li>
            React has the ability to omit an attribute if the value passed to it is not true
          </li>
          <li>
            <strong><i>Hooks</i></strong> are used to make use of the state and other features without having to explicitly write a class
          </li>
          <li>
            They were added to React in the version v16.8
          </li>
          <li>
            All of this is done without making any changes to the component hierarchy
          </li>
          <li>
            To avoid re-rendering in React, we can use pure components
          </li>
          <li>
            The React Context API is a way for React APP to effectively produce global variables that can be passed around
          </li>
          <li>
            A new type of context can be created using <strong>React.createContext API</strong>
          </li>
          <li>
            This is the alternative of <strong><i>'prop drilling'</i></strong>
          </li>
          <li>
            It can be defined as a process in React app where props are passed from one part of a tree to another by going through other parts that do not need the data but only help in passing it through the tree
          </li>
          <li>
            It is also known as <i>prop-threading</i>
          </li>
          <li>
            Action must have type property that indicates the type of action
          </li>
          <li>
            They must be defined as String Constant
          </li>
          <li>
            Reducers are pure function which specify how the application state changes in response to an Action
          </li>
          <li>
            It takes in the previous state and an action and returns the new state
          </li>
          <li>
            Synthetic event is an object which acts as a cross-browser wrapper around the browser's native event
          </li>
          <li>
            <h4>
              Class Components v/s Functional Components
            </h4>
            <table className='reactComponent__table'>
              <thead>
                <tr>
                  <th>
                    Class Components
                  </th>
                  <th>
                    Functional Components
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Stateful components
                  </td>
                  <td>
                    Stateless components
                  </td>
                </tr>
                <tr>
                  <td>
                    It mush have <i>render()</i> method returning HTML
                  </td>
                  <td>
                    No <i>render()</i> method is used
                  </td>
                </tr>
                <tr>
                  <td>
                    They implement state and logic
                  </td>
                  <td>
                    They simply accept data and display them in some form, that they are mainly responsible for rendering UI
                  </td>
                </tr>
                <tr>
                  <td>
                    It requires us to extend from <strong>React.Component</strong> and creates a render function which returns a React element
                  </td>
                  <td>
                    It is just a plain <strong>JavaScript</strong> function that accepts props as an argument and returns a React element
                  </td>
                </tr>
                <tr>
                  <td>
                    Can hold or manage state
                  </td>
                  <td>
                    Cannot hold or manage state
                  </td>
                </tr>
                <tr>
                  <td>
                    Complex as compared to stateless components
                  </td>
                  <td>
                    Simple and easy to understand
                  </td>
                </tr>
                <tr>
                  <td>
                    Can work with all life cycle methods
                  </td>
                  <td>
                    Doesnot work with any life cycle method
                  </td>
                </tr>
                <tr>
                  <td>
                    Can be reused
                  </td>
                  <td>
                    Cannot be reused
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            Life cycle methods of Components
            <ul>
              <li>
                <strong>
                  getInitialState()
                </strong>
              </li>
              <li>
                <strong>
                  componentDidMount()
                </strong>
              </li>
              <li>
                <strong>
                  shouldComponentUpdate()
                </strong>
              </li>
              <li>
                <strong>
                  componentDidUpdate()
                </strong>
              </li>
              <li>
                <strong>
                  componentWillUnmount()
                </strong>
              </li>
            </ul>
          </li>
          <li>
            <h4>
              React Routing v/s Conventional Routing
            </h4>
            <table className='reactComponent__table'>
              <thead>
                <tr>
                  <th>
                    React Routing
                  </th>
                  <th>
                    Conventional Routing
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Single HTML Page
                  </td>
                  <td>
                    Each view is a new HTML file
                  </td>
                </tr>
                <tr>
                  <td>
                    User navigates multiple views in the same file
                  </td>
                  <td>
                    User navigates mulitple files for each view
                  </td>
                </tr>
                <tr>
                  <td>
                    The page doesnot refresh since it is a single file
                  </td>
                  <td>
                    The page refreshes every time after user navigates
                  </td>
                </tr>
                <tr>
                  <td>
                    Improved performance
                  </td>
                  <td>
                    Slower performance
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            React Components can be styled by
            <ul>
              <li>
                Inline styling
              </li>
              <li>
                JavaScript Object
              </li>
              <li>
                CSS Stylesheet
              </li>
            </ul>
          </li>
          <li>
            <h2>React Hooks</h2>
            <ul>
              <h4>Different types of React Hooks</h4>
              <ul>
                <li>
                  useState
                </li>
                <li>
                  useEffect
                </li>
                <li>
                  useContext
                </li>
                <li>
                  useRef
                </li>
                <li>
                  useReducer
                </li>
                <li>
                  useMemo
                </li>
                <li>
                  useCallback
                </li>
                <li>
                  useImperativeHandle
                </li>
                <li>
                  useLayoutEffect
                </li>
                <li>
                  useDebugValue
                </li>
                <li>
                  We can create custom hooks in React as well
                </li>
              </ul>
            </ul>
            <ul>
              <li>
                Hooks are a new feature introduced in React in the v16.8, They help us to manage the state of the application without having to write class components
              </li>
              <li>
                Prior to v16.8, to manage the state of the application, we had to use class based components but after the introduction of Hooks, we can manage the state of the application using <strong>useState()</strong> hook
              </li>
              <li>
                Hooks will not work inside class components
              </li>
              <li>
                One reason to introduce hooks was the complexity in dealing with <strong>this</strong> keyword inside class components. If not handled properly, <strong>this</strong> will take some other value
              </li>
              <li>
                Hooks allow to share stateful logic without changing the component hierarchy
              </li>
              <li>
                Class components do not minify very well and also make hot reloading unreliable
              </li>
              <li>
                In a complex class component, related code are scattered in different lifecycle methods. Example, in case of a data fetching, we do that mainly in componentDidMount() and componentDidUpdate(). Another example is, in case of event listeners, we use componentDidMount() to bind an event and componentWillUnmount() to unbind
              </li>
              <li>
                The Effect hook lets us to perform side effects in functional components. It helps us to avoid redundant code in different lifecycle methods of a class component. It helps to group related code, Here the term side effects refer to fetching requests, manipulating DOM, using timer functions and more
              </li>
              <li>
                useEffect hook is a function which accepts a callback function. That callback function is called every time render happens
              </li>
              <li>
                useEffect function accepts a second parameter which should be an array. Within this array, we need to pass the props or state we need to watch for. Only if those props or state mentioned in the array change, the effect is executed
              </li>
              <li>
                React hooks must only be called at the top level. They should not be called inside nested functions, loops or conditions
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <Link className='reactComponent__link' to='/'>Back to Home</Link>
    </div>
  )
}

export default ReactComponent;