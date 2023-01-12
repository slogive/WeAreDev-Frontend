import { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { userDestroy } from '../../features/user/logged';
import styles from './navbar.module.scss';

export default function Navbar(props: any): JSX.Element {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const [menuState, setMenuState] = useState(false);

  useLayoutEffect(() => {
    setMenuState(false);
  }, [pathname]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.c_title}>
        <NavLink className={styles.title} to={'/'}>
          User Management
        </NavLink>
      </div>

      <div className={styles.hamburger} onClick={() => setMenuState(!menuState)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`${styles.c_elements} ${menuState ? styles.opened : styles.closed}`}>
        <button className={`${styles.hamburger} ${styles.fake}`}>🍔</button>

        <NavLink className={({ isActive }) => (isActive ? `${styles.active}` : '')} to={'/'}>
          Home
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? `${styles.active}` : '')} to={'/users'}>
          Users
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? `${styles.active}` : '')} to={'/account'}>
          Account
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? `${styles.active}` : '')} to={'/signup'}>
          Signup
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? `${styles.active}` : '')}
          to={'/login'}
          onClick={() => (state.loggedUser.logged ? dispatch(userDestroy()) : '')}
        >
          {state.loggedUser.logged ? 'Logout' : 'Login'}
        </NavLink>
      </div>
    </nav>
  );
}
