import { createContext, useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import cartItems from './data';
import { getTotals } from './utils';

import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';

const url = 'https://www.course-api.com/react-useReducer-cart-project';

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(),
};

export const AppProvider = ({ children }) => {
  // The useReducer(reducer, initialState) hook accepts 2 arguments: the reducer function and the initial state. The hook then returns an array of 2 items: the current state and the dispatch function.

  //The initial state is the value the state is initialized with
  //An action object is an object that describes how to update the state.
  //If the action object must carry some useful information (aka payload) to be used by the reducer, then you can add additional properties to the action object.
  //The action object is interpreted by the reducer function
  //The dispatch is a special function that dispatches an action object.

  //useReducer accepts 2 arguments: the reducer function and the initial state
  //and return the current state and the dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);

  const { totalAmount, totalCost } = getTotals(state.cart);

  //Whenever you want to update the state
  //you simply call the dispatch function with the appropriate action object: dispatch(actionObject)
  //dispatching means a request to update the state
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  const fetchData = async () => {
    try {
      dispatch({ type: LOADING });
      const response = await fetch(url);
      const cart = await response.json();
      dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
