import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
const App = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Adopt me'),
    React.createElement(Pet, { name: 'Luna', type: 'Dog', breed: 'Havanese' }),
    React.createElement(Pet, { name: 'Dack', type: 'Duck', breed: 'Ducker' }),
    React.createElement(Pet, { name: 'Limo', type: 'Fish', breed: 'Selemon' })
  );
};

render(React.createElement(App), document.getElementById('root'));
