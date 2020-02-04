// code
const Pet = ({ name, type, breed }) => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, type),
    React.createElement('h2', {}, breed)
  );
};

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

ReactDOM.render(React.createElement(App), document.getElementById('root'));
