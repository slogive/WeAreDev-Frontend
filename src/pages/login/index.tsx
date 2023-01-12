import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userUpdate } from '../../features/user/logged';
import styles from './login.module.scss';

export default function Login(): JSX.Element {
  const navigate = useNavigate();

  const state: any = useSelector((state: any) => state.loggedUser);
  const dispatch = useDispatch();

  const [userLogged, setUserLogged] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  useEffect(() => {
    state.logged && navigate('/account');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function changeHandler({ Evt }: { Evt: any }) {
    if (!Evt) return;

    setUserLogged({ ...userLogged, [Evt.target.name]: Evt.target.value });
  }

  function Request() {
    axios
      .post(`${process.env.REACT_APP_API_URI}/login`, {
        email: userLogged.email,
        password: userLogged.password,
      })
      .then((r) => {
        dispatch(
          userUpdate({
            id: r.data.body.id,
            name: r.data.body.name,
            surname: r.data.body.surname,
            email: r.data.body.email,
            token: r.data.body.token,
            logged: true,
          })
        );

        navigate('/users');
      })
      .catch((r) => {
        alert(r.response.data.message);
      });
  }

  return (
    <div className={styles.c_login}>
      <h1>Login to your account</h1>

      <form
        className={styles.c_form}
        onSubmit={(Evt) => {
          Evt.preventDefault();
          Request();
        }}
        onChange={(Evt) => changeHandler({ Evt })}
      >
        <label htmlFor='email'>Email</label>
        <input type='email' autoComplete='email' id='email' name='email' onClick={() => {}} />

        <label htmlFor='email'>Password</label>
        <input type='password' autoComplete='current-password' id='password' name='password' onClick={() => {}} />

        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
