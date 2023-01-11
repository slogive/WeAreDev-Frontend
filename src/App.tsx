import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';
import { Footer, Navbar } from './components';
import { Home, Login, Signup, User, Users, Account } from './pages';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className={styles.f}>
        <Navbar />

        <main className={styles.c_main}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/users' element={<Users />} />
            <Route path='/user' element={<User />} />
            <Route path='/account' element={<Account />} />

            <Route path='*' element={<div>Not found</div>} />

            <Route path='/test' element={<div>Test</div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
