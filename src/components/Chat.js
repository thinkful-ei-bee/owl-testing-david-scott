import React from 'react';
import './Chat.css';

class Chat extends React.Component {
  render() {
    const eventMapping = {
      'thumbs-up': 'gave a thumbs up',
      'thumbs-down': 'gave a thumbs down',
      'clap': 'clapped',
      'raise-hand': 'raised their hand',
      'join': 'joined', 
      'leave': 'left',
      'join-stage': 'joined the stage',
      'leave-stage': 'left the stage'
    }
    const participants = this.props.participants;
    const chatEvents = this.props.chatEvents;
    const chatTextBoxes = chatEvents.map((evt, i) => {
      const speaker = participants.find(ele => ele.id === evt.participantId);
      if(evt.type === 'message') {
          const messageTime = new Date(evt.timestamp);
          const convertedTime = messageTime.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          })
          return (
            <div className="chatEvent timeStamped" key={i}>
              <img src={speaker.avatar} alt={speaker.name} />
              <strong>{speaker.name} </strong>
              <span> {convertedTime}</span>
              <p class="indented">{evt.message}</p>
            </div>
          );
      } else {
        return (
          <div className="chatEvent" key={i}>
              <p><strong>{speaker.name}</strong> {eventMapping[evt.type]}</p>
          </div>
        );
      } 
       
    });
  
    return (
      <div className="sideBarContainer">
         <div className="sideBar">
            <div className="allMessages">{chatTextBoxes}</div>
        </div>
        <input type="text" placeholder="Chat"></input>
      </div>
    );
  }
}

export default Chat;

