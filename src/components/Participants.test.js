import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participants from './Participants';

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


describe('<Participants />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participants participants={participants}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });  

  it('matches previous snapshot', () => {
    const tree = renderer.create(<Participants participants={participants} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});
