//import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import {Home} from './Home';
import {Employee} from './Employee';
import {Department} from './Department';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return ( 
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">
          React JS Tutorial
        </h3>

        <Navigation/>

        <Routes>
          <Route path='./Home.js' component={<Home/>} exact/>
          <Route path='./Department' component={<Department/>}/>
          <Route path='./Employee' component={<Employee/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
