import { useEffect } from 'react';
import { useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button
        className='btn'
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle Component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const someFun = () => {
      console.log('Hi there');
    };
    window.addEventListener('scroll', someFun);
    return () => window.removeEventListener('scroll', someFun);
  }, []);

  // useEffect(() => {
  //   console.log('This is interesting!');
  //   const intervalId = setInterval(() => {
  //     console.log('This is inside the interval');
  //   }, 1000);
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);
  return <h2> Hello there,</h2>;
};

export default CleanupFunction;
