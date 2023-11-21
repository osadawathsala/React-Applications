import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    //setValue(value + 1);
    //behind updated value
    // console.log(value);
    //solution
    // setValue((currentState) => {
    //   const newState = currentState + 1;
    //   return newState;
    // });

    setTimeout(() => {
      // setValue(value + 1); won't work
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);

    console.log(value);
  };
  return (
    <div>
      <h2>Value : {value} </h2>
      <button
        type='button'
        style={{ marginTop: '2rem' }}
        className='btn'
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
};

export default UseStateGotcha;
