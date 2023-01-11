import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import styles from './users.module.scss';

export default function Users(): JSX.Element {
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

  useEffect(() => {
    (async () => {
      await axios.post(`${process.env.REACT_APP_API_URI}/getUsers`, {}).then((r) => setDataUsers(r.data));
    })();
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
                  <span>{Itm.documentType}</span>
                </div>

                <div>
                  <span>{Itm.document}</span>
                </div>

                <div>
                  <span>{Itm.score} / 900</span>
                </div>

                <div className={styles.actions}>
                  <button>Modify</button>
                </div>
              </Fragment>
            ))}
        </div>
      </section>
    </div>
  );
}
