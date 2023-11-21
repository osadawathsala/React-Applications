import { useState } from 'react';
import NavLinks from './NavLinks';
import UserContainer from './UserContainer';

const Navbar = () => {
  const [user, setUser] = useState({ name: 'Osada' });
  const logout = () => {
    setUser(null);
  };
  return (
    <nav className='navbar'>
      <h2>Context API </h2>
      <NavLinks user={user} logout={logout} />
    </nav>
  );
};

export default Navbar;
