import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Stage from './Stage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
