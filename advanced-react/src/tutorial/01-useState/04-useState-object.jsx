import { useState } from 'react';
import { data } from '../../../data';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Osada',
    age: 45,
    hobby: 'swimming',
  });

  const displayPerson = () => {
    //setPerson({ name: 'Wathsala', age: 46, hobby: 'jogging' });
    setPerson({ ...person, name: 'Kamal' });
  };

  return (
    <div>
      <h2>Name: {person.name}</h2>
      <h2>Age: {person.age}</h2>
      <h2>Hobby: {person.hobby}</h2>
      <button
        type='button'
        style={{ marginTop: '2rem' }}
        className='btn'
        onClick={displayPerson}
      >
        Display Kamal
      </button>
    </div>
  );
};

export default UseStateObject;
