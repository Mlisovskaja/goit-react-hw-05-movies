import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <>
      <ul className={styles.navmenu}>
        <li>
          <NavLink to="/" className={styles.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={styles.link}>
            Movies
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
