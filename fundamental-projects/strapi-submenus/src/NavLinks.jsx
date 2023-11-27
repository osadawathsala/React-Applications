import { useGlobalContext } from './Context';
import subLinks from './data';
const NavLinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <div className='nav-links'>
      {subLinks.map((subLink) => {
        const { pageId, page } = subLink;
        return (
          <button
            className='nav-link'
            key={pageId}
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
