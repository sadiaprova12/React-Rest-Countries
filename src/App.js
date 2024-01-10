import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Contries from './components/Countries/Contries';

function App() {
  return (
    <div className="App">
     
     <Contries></Contries>
    </div>
  );
}


/* function LoadCountries(){
  /**
   1. Declaring State to save loaded data
   */
  /* const [countries, setCountries] = useState([]);
  /** 
   2. Writing useEffect()
  */

   /*useEffect( () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    // .then(data => console.log(data))
    .then(data => setCountries(data))
   }, [])

 /* return(
    <div>
      <h1>Visiting Every Country Of The World!!!</h1>
      <h3>Available Countries: {countries.length}</h3>
      {
        // countries.map(country => console.log(country))
        // countries.map(country => <p{country.name.common}></p>)
        /*countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}

/**
 Display Countries In A Simple Way, Folder Structure
 */

/**
 Eka dhik component
 */

 /*function Country(props){
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Population: {props.population}</h4>
    </div>
  )
 }*/

export default App;
