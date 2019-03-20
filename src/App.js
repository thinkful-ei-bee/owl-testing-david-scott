import React from 'react';
import './App.css';
import STORE from './STORE.js';
import Stage from './components/Stage';
import Bottom from './components/Bottom';
import Top from './components/Top';
import Chat from './components/Chat';
import Participants from './components/Participants';

function App() {
  
  const usersOnStage = STORE.participants.filter(obj => obj.onStage);
  const localUser = STORE.localUser;
  const localUserObj = STORE.participants.filter(obj => obj.id === localUser)[0];
  const numActive = STORE.participants.filter(obj => obj.inSession).length;

  const viewDiv = STORE.view === 'Chat' ? <Chat chatEvents={STORE.chatEvents} participants={STORE.participants}></Chat> : <Participants participants={STORE.participants}></Participants>;

  return (
    <main className='App'>
      <Top numActive={numActive}></Top>
      {viewDiv}
      <Stage usersOnStage={usersOnStage} localUser={localUser}></Stage>
      <Bottom onStage={localUserObj.onStage}></Bottom>
    </main>
  );
}

export default App;