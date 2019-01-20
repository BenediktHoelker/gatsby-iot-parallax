import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({siteTitle, menuLinks}) => (
  <div style={{
    background: 'DodgerBlue',
    marginBottom: `1.45rem`
  }}>
    <div
      style={{
      margin: `0 auto`,
      maxWidth: 960
    }}>
      <nav style={{
        display: 'flex',
        flex: 1
      }}>
        {menuLinks.map(link => <li
          key={link.name}
          style={{
          listStyleType: 'none',
          textAlign: 'center',
          padding: '14px 16px'
        }}>
          <h1>
            <Link
              style={{
              color: `white`,
              textDecoration: `none`
            }}
              to={link.link}>{link.name}</Link>
          </h1>
        </li>)
}
      </nav>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
