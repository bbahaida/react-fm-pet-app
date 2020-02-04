import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
const App = () => {
  return (
    <div>
      <h1>Adopt me</h1>
      <Pet name="Luna" type="Dog" breed="Havanese" />
      <Pet name="Dack" type="Duck" breed="Ducker" />
      <Pet name="Limo" type="Fish" breed="Selemon" />
    </div>
  );
};

render(<App />, document.getElementById('root'));
