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
      <div style={{marginLeft:"10%", marginRight:"20%"}}>
        <h1>INFORMAATIOTA</h1>
        <ListGroup>
          {tieto.map((item, index) => (
          <ListGroup.Item key={index}><b>{item.price}</b><br></br><b>START DATE: </b>{item.startDate} <br></br><b>END DATE: </b>{item.endDate}</ListGroup.Item>))}
        </ListGroup>
      </div>
    );
}