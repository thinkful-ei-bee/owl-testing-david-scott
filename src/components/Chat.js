import React from 'react';
import './Chat.css';

class Chat extends React.Component {
  render() {
    const participants = this.props.participants;
    const chatEvents = this.props.chatEvents;
    const chatTextBoxes = chatEvents.map((evt, i) => {
      const speaker = participants.find(ele => ele.id === evt.participantId);
      switch(evt.type) {
        case 'message' :
          return (
            <div className="chatEvent" key={i}>
              <img src={speaker.avatar} alt={speaker.name} />
              <span>{speaker.name}</span>
              <p>{evt.message}</p>
            </div>
          );
        case 'thumbs-up' :
          return (
            <div className="chatEvent" key={i}>
              <p>{speaker.name} gave a thumbs up</p>
            </div>
          );
        case 'thumbs-down' :
          return (
            <div>
              <p>{speaker.name} gave a thumbs down</p>
            </div>
          );
        default :
          return 6;
      }
    });
  
    return (
    <div>{chatTextBoxes}</div>
    );
  }
}

export default Chat;

