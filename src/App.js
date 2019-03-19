import React from 'react';
import './App.css';
import STORE from './STORE.js';
import Stage from './components/Stage';
import Bottom from './components/Bottom';
import Top from './components/Top';

function App() {
  
  const usersOnStage = STORE.participants.filter(obj => obj.onStage);
  const localUser = STORE.localUser;
  const localUserObj = STORE.participants.filter(obj => obj.id === localUser)[0];
  const numActive = STORE.participants.filter(obj => obj.inSession).length;


  return (
    <main className='App'>
      <Top numActive={numActive}></Top>
      <Stage usersOnStage={usersOnStage} localUser={localUser}></Stage>
      <Bottom onStage={localUserObj.onStage}></Bottom>
    </main>
  );
}

export default App;