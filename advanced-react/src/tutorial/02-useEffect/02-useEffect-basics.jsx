import { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log('hello there - infinite calling ');
  };

  //sayHello();
  //cb can't return promise (so can't make it async)
  useEffect(() => {
    //by default runs on each render (initial and re-render)
    //if dependency array empty [] runs only on initial render
    console.log('Hello from useEffect ');
  }, []);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
