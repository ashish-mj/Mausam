import React from 'react';

const api = {
  key : "ad2569b0b91b23602d0a188447c0d986",
  base : "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
        
        <main>
           <h2>MAUSAM</h2>
           <div className="search-box">
             <input type="text" className="search-bar" placeholder="Search"/>
           </div>
        </main>
    </div>
  );
}

export default App;
