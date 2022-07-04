import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
// Function for handling the Navigation bar 
function Navbar() {
  // Declaring Click and providing a value as default false.
  const [click, setClick] = useState(false);
  // Declairing Close Mobile Menu
  const closeMobileMenu = () => setClick(false);
  // Declairing button 
  const [button, setButton] = useState(true)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

useEffect(() =>{
  showButton();
}, []);

  window.addEventListener('resize', showButton);


  const handleClick = () => setClick(!click)
  // After user clicks the Hamburger icon to open the NavBar this is whats returned~
  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          P.B.K 
          <i className='fab fa-typo3'></i>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {/* after user clicks hamburger it turns to an X icon */}
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        {/* after user clicks this removes dropdown menu */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
          Galactic
            <Link to='/' className='nav-links' onClick={closeMobileMenu}/>
          </li>
          <li className='nav-item'>
          Fantasy
            <Link to='/' className='nav-links' onClick={closeMobileMenu}/>
          </li>
          <li className='nav-item'>
          Nature
            <Link to='/' className='nav-links' onClick={closeMobileMenu}/>
          </li>
        </ul>
        {button && <Button>Sign-up</Button>}
      </div>
    </nav>
    </>
  )
}



export default Navbar;