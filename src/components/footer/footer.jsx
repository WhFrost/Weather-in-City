import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './footer.module.scss';

function Footer () {
  return (
    <footer className={styles['footer']}>
      <div className={`${globalStyles['container']} ${styles['footer__wrapper']}`}>
        <p className={styles['footer__content']}>
          Тестовое задание для компании <span className={styles['footer__content--brand']}>&ldquo;Агентум&rdquo;</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
