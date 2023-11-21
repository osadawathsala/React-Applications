import defaultImage from '../../assets/default-avatar.svg';

const Person = ({ name, nickName = 'shakeAndBake', images }) => {
  const url = images?.[0]?.small?.url || defaultImage;
  return (
    <div>
      <img src={url} alt={name} style={{ width: '50px' }} />
      <h2>{name}</h2>
      <p>nickName: {nickName}</p>
    </div>
  );
};

export default Person;
