import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './login';
import Producto from './productos/productos';

export default function Principal() {

    useEffect(() => {
       console.log("VAMOS A VALIDAR QUE TENGA TOKEN VALIDO");
      }, []);


  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>

            <li>
              <Link to="/productos">productos</Link>
            </li>
          </ul>
        </nav>
   

    
    <Switch>
     
      <Route path="/productos">
        <Producto />
      </Route>
   
   
    </Switch>
    </div>
   </Router>
    
 
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}