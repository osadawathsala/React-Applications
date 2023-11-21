import { useReducer } from 'react';
import { data } from '../../../data';
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './Actions';
import reducer from './Reducer';

const defaultState = {
  people: data,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    //setPeople(newPeople);
    dispatch({ type: REMOVE_ITEM, item: { id } });
  };

  const clearItems = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const resetItems = () => {
    //setPeople(data);
    dispatch({ type: RESET_LIST });
  };
  const { people } = state;
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {people.length < 1 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetItems}
        >
          reset
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearItems}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
