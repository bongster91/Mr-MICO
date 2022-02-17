import { Link } from 'react-router-dom';

function NavBar() {
  return <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/users/:id/portfolio'>Portfolio</Link>

  </nav>;
}

export default NavBar;
