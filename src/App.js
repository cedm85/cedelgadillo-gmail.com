import React from 'react'
import { useState } from 'react';
import AnimalShow from './AnimalShow'
import './App.css';

function App() {
  const [animals, setAnimals] = useState([]);

    function getRandomAnimal(){
        const animals = ["bird", "cat", "cow", "dog", "horse"];
        return animals[Math.floor(Math.random() * animals.length)]
    }
    
    const handleClick =()=>{
      setAnimals([...animals, getRandomAnimal()])
    }
  
    const renderAnimals = animals.map((animal, index) => {
      return <AnimalShow type={animal} key={index} />
    })

    return (
      <div className='app'>
        <button onClick={handleClick}> Add Animal </button>
        <h3 className='animal-list'>{renderAnimals}</h3>
      </div>
    )
}

export default App
