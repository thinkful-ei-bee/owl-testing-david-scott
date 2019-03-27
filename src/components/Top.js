import React from 'react';
import './Top.css';
import tools from '../imgs/tools.png';

class Top extends React.Component {
  render() {
    const numActive = this.props.numActive;
    let chatActive;
    let participantActive;
    
    if (this.props.view === 'Chat') {
      chatActive = 'chatButton underlined';
      participantActive = 'ParticipantsButton';
    } else {
      chatActive = 'chatButton';
      participantActive = 'ParticipantsButton underlined';
    }
    return(
      <header>
        <div className={chatActive}>Chat</div>
        <div className={participantActive}>Participants ({numActive})</div>
        <img src={tools} alt="tools" />
      </header>
    );
  }
}

export default Top;