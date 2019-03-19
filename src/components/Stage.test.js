import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Stage from './Stage';

const users = [
  {
  id: 1,
  name: 'Koren Templeton',
  avatar:
      'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
  inSession: true,
  onStage: true
  },
  {
  id: 2,
  name: 'Caty Flucker',
  avatar:
      'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
  inSession: true,
  onStage: true
  }
];

const local = 1;

describe('<Stage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stage usersOnStage={users} localUser={local}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('matches previous snapshot', () => {
    const tree = renderer.create(<Stage usersOnStage={users} localUser={local}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
