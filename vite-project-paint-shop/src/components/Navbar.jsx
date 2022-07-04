import React, {useState} from 'react'
import {Link} from 'react-router-dom';

// Function for handling the Navigation bar 
function Navbar() {
  // Declaring Click and providing a value as default false.
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click)
  // After user clicks the Hamburger icon to open the NavBar this is whats returned~
  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          P.B.K 
          <i className='fab fa-typo3'></i>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {/* after user clicks hamburger it turns to an X icon */}
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        {/* after user clicks this removes dropdown menu */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}></ul>
      </div>

    </nav>
    </>
  )
}



export default Navbar;