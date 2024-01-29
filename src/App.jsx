// import { useState } from 'react'

import './App.css'

function App() {
  
const handleClick = () => {
		alert("I'm a button!");
	};

	return <button onClick={handleClick}>Click me!</button>;
}

export default App
