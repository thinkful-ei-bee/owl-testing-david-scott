import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participants from './Participants';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Participants />, div);
  ReactDOM.unmountComponentAtNode(div);
});
