import React from 'react';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Card name="John Doe" status="available" />
      <Card name="Jane Smith" status="unavailable" />
    </div>
  );
}

export default App;