import React, { FunctionComponent } from 'react';
import Pet from './Pet';
import { Animal } from '@frontendmasters/pet';
const Results: FunctionComponent<{ pets: Animal[] }> = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No Results</h1>
      ) : (
        pets.map(pet => (
          <Pet
            key={pet.id}
            animal={pet.type}
            name={pet.name}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
