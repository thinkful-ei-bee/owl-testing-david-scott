import React from 'react';
import './Stage.css';

// props for stage
// this.props.usersOnStage , array of user objects
// this.props.localUser, id of local user

class Stage extends React.Component {
  render() {

    const usersOnStage = this.props.usersOnStage;
    const localUser = this.props.localUser;
    const nonLocalUsers = usersOnStage.filter(obj => obj.id !== localUser);

    let localUserJsx = '';

    if (usersOnStage.length !== nonLocalUsers.length) {
      const localUserAvatarSrc = usersOnStage.filter(obj => obj.id === localUser)[0]
        .avatar;
      localUserJsx = <div className="localUserBox"><img src={localUserAvatarSrc} alt='local user' /></div>;
    }

    let nonLocalUserJsx = nonLocalUsers.map((user) =>
      <div key={user.id} className='userCard'>
        <h2>{user.name}</h2>
        <img src={user.avatar} alt={user.name} />
      </div>
    )

    return (
      <div className='stageContainer'>
        <section className='stageArea'>
          {nonLocalUserJsx}
        </section> 
        <div className='localUserArea'>{localUserJsx}</div>
      </div>
    );
  }
}

export default Stage;
