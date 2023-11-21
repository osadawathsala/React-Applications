const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count += 1;
  };

  return (
    <div>
      <h2>{count}</h2>
      <button type='button' onClick={handleClick} className='btn'>
        Increase Count ww
      </button>
    </div>
  );
};

export default ErrorExample;
