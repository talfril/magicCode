import { Outlet, Link } from 'react-router-dom';
import styles from './layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.page}>
      <nav className={styles.navMenu}>
        <Link to="/" className={styles.navLink}>
          Главная
        </Link>
        <Link to="/about" className={styles.navLink}>
          О проекте
        </Link>
      </nav>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
