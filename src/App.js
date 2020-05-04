import React from 'react';

const api = {
  key: '58969c8fe17ba4c24eda16108bf6a7f7',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  return (
    <div className="App">
      <main>
        <div className='search-box'>
          <input
          type='text'
          className='search-bar'
          placeholder='Search...'
          />
        </div>
      </main>
    </div>
  );
}

export default App;
