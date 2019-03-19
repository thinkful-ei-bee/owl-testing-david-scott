import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Bottom from './Bottom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bottom />, div);
  ReactDOM.unmountComponentAtNode(div);
});
