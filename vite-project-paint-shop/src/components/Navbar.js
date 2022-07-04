import React from 'react'
import PropTypes from 'prop-types'

const Navbar = props => {
  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          P.B.K <i className='fab fa-typo3'></i>
        </Link>
        <div className='menu-icon'>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}>
          </i>
        </div>
      </div>

    </nav>
    </>
  )
}

Navbar.propTypes = {}

export default Navbar