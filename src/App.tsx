import React from 'react';
import Stars from './componets/Stars';
import './App.css';

export default function App() {
  function randomStars(max) {
    return Math.floor(Math.random() * max);
  }
  return (
    <Stars count={randomStars(5)}/>
  );
}

