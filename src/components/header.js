import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './header.module.css'

const Header = ({ siteTitle, menuLinks }) => (
  <div className={styles.header}>
    <nav className={styles.navigation}>
      {menuLinks.map(link => {
        return (
          <li key={link.name} className={styles.listItem}>
            <h1>
              <Link className={styles.link} to={link.link}>
                {link.name}
              </Link>
            </h1>
          </li>
        )
      })}
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
