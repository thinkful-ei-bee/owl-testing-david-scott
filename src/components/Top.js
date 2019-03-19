import React from 'react';
import './Top.css';
import tools from '../imgs/tools.png';

class Top extends React.Component {
  render() {
    const numActive = this.props.numActive;

    return(
      <header>
        <div className='chatButton'>Chat</div>
        <div className='ParticipantsButton'>Participants ({numActive})</div>
        <img src={tools} alt="tools" />
      </header>
    );
  }
}

export default Top;