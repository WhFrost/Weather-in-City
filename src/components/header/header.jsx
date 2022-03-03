import React from 'react';
import PropTypes from 'prop-types';
import globalStyles from '../app/app.module.scss';
import styles from './header.module.scss';
import Logo from '../logo/logo';
import SiteNav from '../site-nav/site-nav';

function Header (props) {
  const {navItems} = props;
  return (
    <header className={styles['header']}>
      <div className={`${globalStyles['container']} ${styles['header__wrapper']}`}>
        <Logo />
        <SiteNav navItems={navItems}/>
      </div>
    </header>
  );
}

Header.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string
  }))
};

export default Header;
