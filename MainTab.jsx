
import React from 'react';
import './MainTab.css';

const animals = [
  { name: 'Lion', image: 'https://example.com/lion.jpg' },
  { name: 'Elephant', image: 'https://example.com/elephant.jpg' },
  { name: 'Tyrannosaurus Rex', image: 'https://example.com/trex.jpg' },
  { name: 'Blue Whale', image: 'https://example.com/bluewhale.jpg' }
];

function MainTab() {
  return (
    <div className="main-tab futuristic-theme">
      <h1>🧬 Welcome to the Animal Encyclopedia</h1>
      <input className="search-bar" type="text" placeholder="Search for any species..." />
      <div className="carousel">
        {animals.map((animal, index) => (
          <div className="animal-card" key={index}>
            <img src={animal.image} alt={animal.name} />
            <h3>{animal.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainTab;
