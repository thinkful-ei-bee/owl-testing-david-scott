import React from 'react';
import './Stage.css';
import STORE from '../STORE.js';

class Stage extends React.Component {
  render() {

    const usersOnStage = STORE.participants.filter(obj => obj.onStage);

    const nonLocalUsers = usersOnStage.filter(obj => obj.id !== STORE.localUser);

    let localUserJsx = '';

    if (usersOnStage.length !== nonLocalUsers.length) {
      const localUserAvatarSrc = STORE.participants.filter(obj => obj.id === STORE.localUser)[0]
        .avatar;
      localUserJsx = <img src={localUserAvatarSrc} alt='local user' />;
    }

    let nonLocalUserJsx = nonLocalUsers.map((user) =>
      <div className='userCard'>
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
