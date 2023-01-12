import { Link } from 'react-router-dom';
import styles from './home.module.scss';

export default function Home(): JSX.Element {
  return (
    <div className={styles.c_home}>
      <h1>
        Welcome to {'<'}User Management /{'>'} site
      </h1>

      <div>
        <p>Here you can see the credit information of the users</p>

        <p>Please Login or Sign up to start</p>
      </div>

      <div className={styles.c_buttons}>
        <Link to={'/login'}>Login</Link>
        <Link to={'/signup'}>Sign up</Link>
      </div>
    </div>
  );
}
