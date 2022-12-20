import React from 'react';
import { Link } from 'react-router-dom';
import '../css/OopsConcept.css';

const OopsConceptComponent = () => {
  return (
    <div className='oopsConceptComponent'>
      <div className='oopsConceptComponent__details'>
        <h1>Object Oriented Programming (OOP)</h1>
        It is a programming paradigm (model) based on the concepts of <strong>objects</strong> which can contain data and code, data in the form of fields and and code in the form of procedure <br />
        OOP facilitates software reuse, potentially shortening development time
        <h3 className='oopsConceptComponent__titleOne'>Pillars</h3>
        <ul>
          <li>
            Inheritance
          </li>
          <li>
            Polymorphism
          </li>
          <li>
            Encapsulation
          </li>
          <li>
            Abstraction
          </li>
        </ul>
        <div className='oopsConceptComponent__pillarOne'>
          <h4 className='oopsConceptComponent__titleTwo'>Inheritance</h4>
          <p>
            It is form of software reuse in which a new class is created by absorbing an existing class's members and embelleshing them with new or modified capabilities. <br />
            Existing class is called as Super Class (Parent Class), New class is called as Sub Class (Child Class) <br />
            Direct Super Class - is the superclass from which subclass explicitly extends <br />
            Indirect Super Class - it is any class above the direct superclass in the class hierarchy which defines the inheritance relationship between classes <br />
            Super Class - general info - set of objects represented - larger <br />
            Sub Class - specific info - set of objects represented - smaller <br />
            <ul>
              <li>
                The first task of any sub class constructor is to call its direct superclass's constructor, either explicitly or implicitly
              </li>
              <li>
                If the code doesnot include an explicit call to the superclass constructor, Java implicitly calls the superclass's default or no-argument constructor if it doesnot exists, then the compiler would throw an error
              </li>
              <li>
                To override a superclass method, a sub class must declare a method with same signature (method name, number of parameters, parameter types and order of parameter types) as of the superclass method
              </li>
              <li>
                Explicit call to superclass constructor can be done by using <strong>super()</strong> method
              </li>
              <li>
                Private superclass members cannot be accessed in a sub class
              </li>
              <li>
                In Single Inheritance, a class is derived from one direct superclass, In Multiple Inheritance, a class is derived from more than one direct superclass (Java doesnot support Multiple Inheritance)
              </li>
              <li>
                Multi-level Inheritance example - Teacher's class derived from Faculty Class. which is further derived from Committee Class
              </li>
              <li>
                To overcome Multiple Inheritances problem in Java, we can use <strong>Interfaces</strong>
              </li>
              <li>
                Hierarchial Inheritance example - Teaching staff class derived from Committee Class and Non-Teaching Class derived from Committee Class as well
              </li>
              <li>
                Hybrid Inheritance - Combination of single and multiple inheritance (not allowed in Java)
              </li>
              <li>
                <h5 className='oopsConceptComponent__titleThree'>Constructors</h5>
                <ul>
                  <li>
                    Constructors are not inherited
                  </li>
                  <li>
                    Every object can access a reference to itself with <strong><i>this</i></strong> keyword
                  </li>
                  <li>
                    <strong><i>this</i></strong> keyword cannot be used in static method but can be used in non-static method
                  </li>
                  <li>
                    Every class must have at least one constructor
                  </li>
                  <li>
                    If we do not provide any constructors in a class's declaration, then the compiler creates a default constructor that takes no arguments when it is invoked
                  </li>
                  <li>
                    <strong><i>super</i></strong> keyword can be used to access superclass variables
                  </li>
                </ul>
              </li>
            </ul>
          </p>
        </div>
        <div className='oopsConceptComponent__pillarTwo'>
          <h4 className='oopsConceptComponent__titleTwo'>Polymorphism</h4>
          <ul>
            <li>
              It enables us to <i>program in the general</i> rather than <i>program in specific</i>
            </li>
          </ul>
        </div>
      </div>
      <Link className='oopsConceptComponent__link' to='/'>Back to Home</Link>
    </div>
  );
};

export default OopsConceptComponent;