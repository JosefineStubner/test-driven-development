
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='logo'>Westcoast Cars</h1>
      <ul>
        <li>
          <Link to='/'>Vehicles</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <Link to='/registeruser'>RegisterUser</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;