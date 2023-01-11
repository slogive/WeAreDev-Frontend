import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userUpdate } from '../../features/user/update';
import styles from './users.module.scss';

export default function Users(): JSX.Element {
  const navigate = useNavigate();

  const state: any = useSelector((state: any) => state.loggedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    !state.logged && navigate('/login');
  }, []);

  const [dataUsers, setDataUsers] = useState<
    Array<{
      createdAt: Date;
      document: string;
      documentType: string;
      email: string;
      id: number;
      name: string;
      password: string;
      score: string;
      status: string;
      surname: string;
      updatedAt: Date;
    }>
  >();

  async function Request() {
    await axios.post(`${process.env.REACT_APP_API_URI}/getUsers`, {}).then((r) => setDataUsers(r.data));
  }

  useEffect(() => {
    Request();
  }, []);

  //

  const headerOpt = ['ID', 'Name', 'Surname', 'Email', 'Document Type', 'Document Number', 'Score', 'Action'];

  return (
    <div className={styles.c_users}>
      <section className={styles.c_t}>
        <div className={styles.body}>
          {headerOpt.map((Itm, Idx) => (
            <div key={Idx} className={styles.header}>
              <b>{Itm}</b>
            </div>
          ))}

          {dataUsers &&
            dataUsers.map((Itm, Idx) => (
              <Fragment key={Idx}>
                <div>
                  <span>{Itm.id}</span>
                </div>

                <div>
                  <span>{Itm.name}</span>
                </div>

                <div>
                  <span>{Itm.surname}</span>
                </div>

                <div>
                  <span>{Itm.email}</span>
                </div>

                <div>
                  <span>
                    {/* {Itm.documentType} */}
                    CC
                  </span>
                </div>

                <div>
                  <span>{Itm.document}</span>
                </div>

                <div>
                  <span>{Itm.score} / 900</span>
                </div>

                <div className={styles.actions}>
                  <button
                    onClick={() => {
                      dispatch(
                        userUpdate({
                          id: Itm.id,
                          name: Itm.name,
                          surname: Itm.surname,
                          score: Itm.score,
                          status: Itm.status,
                          document: Itm.document,
                          documentType: Itm.documentType,
                          password: Itm.password,
                          email: Itm.email,
                        })
                      );

                      navigate('/user');
                    }}
                  >
                    Modify
                  </button>
                  <button
                    onClick={() => {
                      axios
                        .post(`${process.env.REACT_APP_API_URI}/deleteUser`, {
                          id: Itm.id,
                        })
                        .then((r) => {
                          Request();
                        })
                        .catch((r) => {
                          alert(r.response.data.message);
                        });
                    }}
                  >
                    Delete
                  </button>
                </div>
              </Fragment>
            ))}
        </div>
      </section>
    </div>
  );
}
