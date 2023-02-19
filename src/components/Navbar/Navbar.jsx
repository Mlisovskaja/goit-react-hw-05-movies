import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Navbar = () => {
  return (
    <section>
      <header>
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
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </section>
  );
};

export default Navbar;
