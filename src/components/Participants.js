import React from 'react';
import './Participants.css';

class Participants extends React.Component {
  render() {
    const people = this.props.participants;
    const onStage = people.filter(person => person.onStage);
    const inSession = people.filter(person => !person.onStage && person.inSession);
    const peopleLeft = people.filter(person => !person.inSession);
    const sorted = onStage.concat(inSession, peopleLeft);

    return sorted.map(person => {});
  }
}

export default Participants;