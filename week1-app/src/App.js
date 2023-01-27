import React from 'react';
import './App.css';
import Demo from "./components/Demo";
import AllUserList from './components/State';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div>
      <Demo />
      <AllUserList />
      <UserDetails />
    </div>
  );
}

export default App;
