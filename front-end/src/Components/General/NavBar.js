import { Link } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return (
  <nav className='navbar'>
    <ul className='navbar__list'>

      <Link to='/'>
        <img className='navbar__list__logo' src='http://placekitten.com/75/75' alt='kitty' />
      </Link>

      <li className='navbar__list__link'>
        <Link  to='/'>Home</Link>
      </li>
      
      <li className='navbar__list__link'>
        <Link to='/about'>About</Link>
      </li>

      <li className='navbar__list__link'>
        <Link to='/users/:user_id/portfolio'>Portfolio</Link>
      </li>

      <li className='navbar__list__link'>
        <Link to='/users/:user_id/profile'>Profile</Link>
      </li>
      
    </ul>
  </nav>
  );
};

export default NavBar;
