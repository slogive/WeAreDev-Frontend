import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './account.module.scss';

export default function Account() {
  const navigate = useNavigate();

  const state: any = useSelector((state: any) => state.loggedUser);

  useEffect(() => {
    !state.logged && navigate('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [user, setUser] = useState<{
    id: any;
    name: any;
    surname: any;
    score: any;
    status: any;
    document: any;
    documentType: any;
    password: any;
    email: any;
    createdAt: any;
    updatedAt: any;
  }>({
    id: '',
    name: '',
    surname: '',
    score: '',
    status: '',
    document: '',
    documentType: '',
    password: '',
    email: '',
    createdAt: '',
    updatedAt: '',
  });

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URI}/getUser`, {
        id: state.id,
      })
      .then((r) => setUser(r.data))
      .catch((r) => {
        alert(r.response.data.message);
      });
  }, [state]);

  return (
    <div className={styles.c_account}>
      <h1>Your Account</h1>

      <div className={styles.data}>
        {/* <label htmlFor=''>Id</label>

        <input type='text' value={user.id} />  onChange={() => {}}*/}
        <label htmlFor=''>Name</label>

        <input type='text' value={user.name} onChange={() => {}} />
        <label htmlFor=''>Surname</label>

        <input type='text' value={user.surname} onChange={() => {}} />
        <label htmlFor=''>Score</label>

        <input type='text' value={user.score} onChange={() => {}} />
        <label htmlFor=''>Status</label>

        <input type='text' value={user.status} onChange={() => {}} />
        <label htmlFor=''>Document</label>

        <input type='text' value={user.document} onChange={() => {}} />
        <label htmlFor=''>Document Type</label>

        <input type='text' value={'CC'} onChange={() => {}} />
        <label htmlFor=''>Password</label>

        <input type='text' value={user.password} onChange={() => {}} />
        <label htmlFor=''>Email</label>

        <input type='text' value={user.email} onChange={() => {}} />
        <label htmlFor=''>Created At</label>

        <input type='text' value={user.createdAt} onChange={() => {}} />
        <label htmlFor=''>Updated At</label>
        <input type='text' value={user.updatedAt} onChange={() => {}} />
      </div>
    </div>
  );
}
