import React from 'react';
import './App.css';
import STORE from './STORE.js';
import Stage from './components/Stage';
import Bottom from './components/Bottom';

function App() {
  
  const usersOnStage = STORE.participants.filter(obj => obj.onStage);
  const localUser = STORE.localUser;
  const localUserObj = STORE.participants.filter(obj => obj.id === localUser)[0];


  return (
    <main className='App'>
      <Stage usersOnStage={usersOnStage} localUser={localUser}></Stage>
      <Bottom onStage={localUserObj.onStage}></Bottom>
    </main>
  );
}

export default App;