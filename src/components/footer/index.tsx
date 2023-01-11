import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.c_footer}>
      <span>All rights reserved {new Date().getFullYear()}</span>
    </footer>
  );
}
