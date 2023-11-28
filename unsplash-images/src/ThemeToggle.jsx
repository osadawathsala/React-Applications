import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useGlobalContext } from './context';
const ThemeToggle = () => {
  const { isDarkTheme, toggleThemes } = useGlobalContext();
  return (
    <section className='toggle-container'>
      <button className='dark-toggle' onClick={toggleThemes}>
        {isDarkTheme ? (
          <BsFillMoonFill className='toggle-icon' />
        ) : (
          <BsFillSunFill className='toggle-icon' />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
