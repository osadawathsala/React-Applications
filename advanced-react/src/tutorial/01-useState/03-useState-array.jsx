import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const filteredPeople = people.filter((person) => person.id !== id);
    setPeople(filteredPeople);
  };
  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button
              type='button'
              className='btn'
              onClick={() => removeItem(id)}
            >
              remove
            </button>
          </div>
        );
      })}
      <button
        type='button'
        style={{ marginTop: '2rem' }}
        className='btn'
        onClick={clearAllItems}
      >
        Clear All
      </button>
    </div>
  );
};

export default UseStateArray;
