import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './signup.module.scss';
import { userUpdate } from '../../features/user/logged';

export default function Signup(): JSX.Element {
  const navigate = useNavigate();

  const state: any = useSelector((state: any) => state.loggedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    state.logged && navigate('/users');
  }, []);

  const [userData, setUserData] = useState<{
    name: string;
    surname: string;
    email: string;
    documentType: 'CC';
    document: string;
    password: string;
    rePassword: string;
  }>({
    name: '',
    surname: '',
    email: '',
    documentType: 'CC',
    document: '',
    password: '',
    rePassword: '',
  });

  function Request() {
    axios
      .post(`${process.env.REACT_APP_API_URI}/user`, {
        name: userData.name,
        surname: userData.surname,
        email: userData.email,
        password: userData.password,
        rePassword: userData.rePassword,
        documentType: userData.documentType,
        document: userData.document,
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

        return navigate('/users');
      })
      .catch((r) => {
        alert(r.response.data.message);
      });
  }

  function changeHandler({ Evt }: { Evt: any }) {
    if (!Evt) return;

    setUserData({ ...userData, [Evt.target.name]: Evt.target.value });
  }

  return (
    <div className={styles.c_signup}>
      <h1>Sign up to new account</h1>

      <form
        className={styles.c_form}
        onChange={(Evt) => changeHandler({ Evt })}
        onSubmit={(Evt) => {
          Evt.preventDefault();
          Request();
        }}
      >
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' autoComplete='name' id='name' name='name' value={userData.name} onChange={() => {}} />
        </div>

        <div>
          <label htmlFor='surname'>Surname</label>
          <input type='text' autoComplete='surname' id='surname' name='surname' value={userData.surname} onChange={() => {}} />
        </div>

        <div>
          <label htmlFor='documentType'>Document Type</label>
          <input
            type='text'
            autoComplete='documentType'
            id='documentType'
            name='documentType'
            value={userData.documentType}
            onChange={() => {}}
            disabled={true}
          />
        </div>

        <div>
          <label htmlFor='document'>Document Number</label>
          <input
            type='text'
            autoComplete='document'
            id='document'
            name='document'
            value={userData.document}
            onChange={() => {}}
          />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' autoComplete='email' id='email' name='email' value={userData.email} onChange={() => {}} />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            autoComplete='current-password'
            id='password'
            name='password'
            value={userData.password}
            onChange={() => {}}
          />
        </div>

        <div>
          <label htmlFor='rePassword'>Confirm Password</label>
          <input
            type='password'
            autoComplete='current-password'
            id='rePassword'
            name='rePassword'
            value={userData.rePassword}
            onChange={() => {}}
          />
        </div>

        <button type='submit' onClick={() => Request()}>
          Signup
        </button>
      </form>
    </div>
  );
}
