import React from 'react';
import './Participants.css';

class Participants extends React.Component {
  render() {
    const people = this.props.participants;
    const onStage = people.filter(person => person.onStage);
    const inSession = people.filter(person => !person.onStage && person.inSession);
    const peopleLeft = people.filter(person => !person.inSession && !person.onStage);
    const sorted = onStage.concat(inSession, peopleLeft);

    const peopleBoxes = sorted.map((person, i) => {
      const dotColor = person.inSession ? 'dot' : 'dot greydot';
      return (
       <div className="participantCard" key={i}>
          <img src={person.avatar} alt={person.name} />
          <strong>{person.name} </strong>
          <p className="indented"><span className={dotColor}></span>{person.onStage ? 'on stage' : (person.inSession ? 'in session' : 'left session')}</p>
       </div>
          );
      }); 
       
    return (
      <div className="sideBarContainer">
        <div className="sideBar">
          <div className="allMessages">{peopleBoxes}</div>
        </div>
      </div>
    );
  }
}

export default Participants;