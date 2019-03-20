import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Chat from './Chat';

const participants = [
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
      onStage: false
  },
  {
      id: 3,
      name: 'Axe Kubicka',
      avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
      inSession: false,
      onStage: true
  }];

const chatEvents = [
  {
   participantId: 3,
   type: 'message',
   message: 'Hello world',
   time: 1548852646559,
   timestamp: 1548852484247
}];

describe('<Chat />', () => {
  it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Chat chatEvents={chatEvents} participants={participants}/>, div);
  ReactDOM.unmountComponentAtNode(div);
  });

  it('matches previous snapshot', () => {
    const tree = renderer.create(<Chat chatEvents={chatEvents} participants={participants} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});

