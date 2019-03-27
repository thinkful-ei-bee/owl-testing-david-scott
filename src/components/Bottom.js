import React from 'react';
import './Bottom.css';
import icons from '../imgs/mediaIcons.png';
import reactions from '../imgs/Reactions.png';

//this.props.onStage

class Bottom extends React.Component {
  render() {
    const buttonText = (this.props.onStage) ? 'Leave Stage' : 'Join Stage';
    const classNm = (this.props.onStage) ? 'leaveButton' : 'joinButton';

    const stageButton = <button className={classNm}>{buttonText}</button>;

    return (
    <footer>
      <img src={reactions} alt="reactions" />
      <div className="right">
      <img src={icons} alt="media buttons" />
      {stageButton}
      </div>
    </footer>
    );
  }
}

export default Bottom;

