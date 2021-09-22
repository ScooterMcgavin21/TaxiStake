import React from 'react';
import { FaBars } from 'react-icons/fa';
//
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavIcon, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements';
//
function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <NavIcon />
            TaxiStake
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'>Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
