import React, {useState} from 'react'
import {Link} from 'react-router-dom';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
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



export default Navbar;