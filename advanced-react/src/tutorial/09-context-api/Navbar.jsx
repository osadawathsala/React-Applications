import { useState, createContext } from 'react';
import { useContext } from 'react';
import NavLinks from './NavLinks';

export const NavbarContext = createContext();
// custom hook
export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: 'Osada' });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className='navbar'>
        <h2>Context API </h2>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
