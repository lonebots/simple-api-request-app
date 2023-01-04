import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  // interact with the redux store
  const [data, setData] = useState();

  // loading app the call the api : https://reqres.in/api/users?
  useEffect(
    () => {

    }, []//empty dependencies for component did mount
  )


  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
