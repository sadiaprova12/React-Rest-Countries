import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <LoadCountries></LoadCountries>
    </div>
  );
}

// make a component
function LoadCountries(){
  /**
   1. Declaring State to save loaded data
   */
  const [countries, setCountries] = useState([]);
  /** 
   2. Writing useEffect()
  */

   useEffect( () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    // .then(data => console.log(data))
    .then(data => setCountries(data))
   }, [])

  return(
    <div>
      <h1>Visiting Every Country Of The World!!!</h1>
      <h3>Available Countries: {countries.length}</h3>
      {
        // countries.map(country => console.log(country))
        countries.map(country => <p>{country.name.common}</p>)
      }
    </div>
  )
}

export default App;
