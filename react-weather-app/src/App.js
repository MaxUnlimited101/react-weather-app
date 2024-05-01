import React from "react";

const api = {
  key: 'a36d358d8dcb236575f6210b2bae325c',
  base: 'https://api.openweathermap.org/data/3.0/'
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="location-box">
          <div className="location">

          </div>
          <div className="date">
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
