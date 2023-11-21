import { useReducer } from 'react';
import { data } from '../../../data';
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './Actions';

const reducer = (state, action) => {
  const { type } = action;
  if (type === CLEAR_LIST) {
    return { ...state, people: [] };
  } else if (type === RESET_LIST) {
    return { ...state, people: data };
  } else if (type === REMOVE_ITEM) {
    const { people } = state;
    const {
      item: { id },
    } = action;

    let updatedPeople = people.filter((person) => person.id !== id);

    return { ...state, people: updatedPeople };
  }
  //return state;
  throw new Error(`No matching "${action.type}" - action:type `);
};

export default reducer;
