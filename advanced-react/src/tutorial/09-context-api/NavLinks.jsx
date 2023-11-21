import UserContainer from './UserContainer';

const NavLinks = () => {
  return (
    <div className='nav-container'>
      <ul className='nav-links'>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#home'>About</a>
        </li>
      </ul>
      <UserContainer />
    </div>
  );
};

export default NavLinks;
