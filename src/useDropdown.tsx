import React, { Dispatch, FunctionComponent, useState } from 'react';

const useDropdown = (
  label: string,
  defaultState: string,
  options: string[]
) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(' ', '-').toLowerCase()}`;

  const Dropdown: FunctionComponent = () => {
    return (
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          value={state}
          placeholder={label}
          onChange={e => setState(e.target.value)}
          onBlur={e => setState(e.target.value)}
          disabled={!options.length}
        >
          <option>All</option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  };

  return [state, Dropdown, setState] as [
    string,
    FunctionComponent,
    Dispatch<string>
  ];
};

export default useDropdown;
