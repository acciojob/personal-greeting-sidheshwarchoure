
//import React from "react";
import React, { useState } from 'react';

import './../styles/App.css';

const App = () => {

    const [name, setName] = useState('');
    
    const handleNameChange = (event) => {
      setName(event.target.value);
    }
  return (
    <div>
        {/* Do not remove the main div */}
        <label htmlFor="nameInput">Enter your name: </label><br></br><br></br>
      <input
        id="nameInput"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      {name && <p>Hello {name}!</p>}
    </div>
  )
}

export default App;
