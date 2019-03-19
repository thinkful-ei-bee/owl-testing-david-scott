import React from 'react';
import './Chat.css';



class Chat extends React.Component {
  render() {
    
    const chatEvents = this.props.chatEvents;
    const participants = this.props.participants;

    const chatTextBoxes = chatEvents.map(event => {
      switch(event.type) {
        case 'message' :
          const speaker = participants.find(ele => ele.id === event.participantId);
          return (
           <div classname="chatEvent">
              <img src={speaker.avatar} alt={speaker.name} />
              <span>{speaker.name}</span>
              <p>{event.message}</p>
            </div>
          );
          default :
           return <span>abc</span>;
      }
    });

    return chatTextBoxes;
  }
}

export default Chat;