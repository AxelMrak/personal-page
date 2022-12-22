import React, { useEffect, useState } from 'react';
import logo from '../../assets/logos/Logo-Axel.png';
import navIco from '../../assets/img/Sort.svg';
import  '../../styles/globalsComponents/header/header.css';
import Nav from './Nav';

/**
 * ? Component HEADER, it includes navigation component.
 * @returns Global component header
 */
function Header() {

  // * State Screen's width
  const [width, setWidth] = useState(0);
  //* State of Show nav or not
  const [isShowNav, setIsShowNav] = useState(false);

  //? When the component is mounted, we will obtain the width of screen and set it in the state.
  useEffect(() => {
    setWidth(innerWidth);
    if (width >= 900) {
      setIsShowNav(false);
    }
  });

  return (
    <header className='headerMainContainer'>
      <div className='logoContainer'>
        <img src={logo} width='150' height='150' alt='Logo of Axel - Frontend developer'/>
      </div>
      <div className='navContainer'>
        {/* If the screen's width is less than 700 the navbar collapsible is hidden and We will can see the navbar normally */}
        {
          width <= 900 ?
            <img className='navIco' src={navIco} width='60' height='60'
              onClick={() => setIsShowNav(!isShowNav)} alt='Navbar collapsible'/>
            :
            <Nav desktop={true} />
        }
      </div>
      {/* If state showNav is true We will can see the collapsible */}
      { isShowNav === true ?
        <Nav desktop={false} />
        :
        null
      }
    </header>
  );
}

export default Header;