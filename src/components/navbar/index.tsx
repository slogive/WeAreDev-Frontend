import { NavLink } from 'react-router-dom';
import styles from './navbar.module.scss';

export default function Navbar(): JSX.Element {
  return (
    <nav className={styles.navbar}>
      <div className={styles.c_title}>
        <NavLink className={styles.title} to={'/'}>
          User Management
        </NavLink>
      </div>

      <div className={styles.c_elements}>
        <NavLink className={({ isActive }) => (isActive ? `${styles.active}` : '')} to={'/'}>
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? `${styles.active}` : '')} to={'/users'}>
          Users
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? `${styles.active}` : '')} to={'/user'}>
          User
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? `${styles.active}` : '')} to={'/signup'}>
          Signup
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? `${styles.active}` : '')} to={'/login'}>
          Login
        </NavLink>
      </div>
    </nav>
  );
}
