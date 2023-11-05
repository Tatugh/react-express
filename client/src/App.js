import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [tieto, setTieto] = useState([])
  useEffect(() => {
    fetch("/get_prices", {mode: "cors"})
    .then(a => a.json())
    .then(b => {setTieto(b.prices); console.log(b.prices)}).catch(c => console.log(c))
    
  }, [])
  
    // fetching the GET route from the Express server which matches the GET route from server.js
    return (
        <ul className="App-intro">
        <ListGroup>
          {tieto.map((item, index) => (<ListGroup.Item key={index}>{item.price} {item.startDate} {item.endDate}</ListGroup.Item>))}
        </ListGroup>
        </ul>
    );
}