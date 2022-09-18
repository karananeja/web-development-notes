import React from 'react';
import { Routes, Route } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import JavaScriptComponent from './pages/JavaScript';
import NodeComponent from './pages/Node';
import OopsConceptComponent from './pages/OopsConcept';
import ReactComponent from './pages/React';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        {/* Using react route nesting to group the routes will similar path */}
        <Route path='/' >
          <Route index element={<Home />} />
          <Route path='oopsconcepts' element={<OopsConceptComponent />} />
          <Route path='javascript' element={<JavaScriptComponent />} />
          <Route path='react' element={<ReactComponent />} />
          <Route path='node' element={<NodeComponent />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div >
  )
}

export default App;