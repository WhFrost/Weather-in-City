import React from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import globalStyles from '../app/app.module.scss';
import styles from './site-nav.module.scss';

function SiteNav (props) {
  const {navItems} = props;

  return (
    <nav className={styles['site-nav']}>
      <ul className={`${globalStyles['list']} ${styles['site-nav__list']}`}>

        {
          navItems.map(({title, link}) => (
            <li className={styles['site-nav__item']} key={nanoid()}>
              <a href={link} className={`${globalStyles['link']} ${styles['site-nav__link']}`}>
                {title}
              </a>
            </li>
          ))
        }

      </ul>
    </nav>
  );
}

SiteNav.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string
  }))
};

export default SiteNav;
