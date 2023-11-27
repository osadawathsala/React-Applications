const Person = ({ name, age, image }) => {
  return (
    <article className='person'>
      <img src={image} alt={name} className='img' />
      <div>
        <h2>{name}</h2>
        <p>{age}</p>
      </div>
    </article>
  );
};

export default Person;
