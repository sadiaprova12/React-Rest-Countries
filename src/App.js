import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <LoadCountries></LoadCountries>
    </div>
  );
}

// make a component
function LoadCountries(){
  return(
    <div>
      <h1>Visiting Every Country Of The World!!!</h1>
    </div>
  )
}

export default App;
