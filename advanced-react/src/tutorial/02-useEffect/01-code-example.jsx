import { useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const infiniteFun = () => {
    setValue(value + 1);
  };
  // this will cause infinite looping
  infiniteFun();

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
