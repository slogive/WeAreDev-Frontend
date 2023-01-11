import { useState } from 'react';
import styles from './login.module.scss';

export default function Login(): JSX.Element {
  const [userLogged, setUserLogged] = useState();

  return (
    <div className={styles.c_login}>
      <h1>Login to your account</h1>

      <form className={styles.c_form}>
        <label htmlFor='email'>Email</label>
        <input type='email' autoComplete='email' />
        <label htmlFor='email'>Password</label>
        <input type='password' autoComplete='current-password' />

        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
