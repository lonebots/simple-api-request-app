import './App.css';
import HomePage from './pages/HomePage';
import { useEffect } from 'react';
import { getAllUsers } from './redux/User/user.actions';

function App() {
  // loading app data with api call
  useEffect(
    () => {
      getAllUsers(1);
    }, []//empty dependencies for component did mount
  )
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
