import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import { animateScroll as scroll } from "react-scroll"
// import LogoMain from '../../assets/images/logos/logo_main.png'


const NavLogo = ({logo, logoAltText}) => {

  const toggleHome = () => {
    scroll.scrollToTop()
  }

    return (
        <LogoContainer to="/" onClick={toggleHome}>
          <img src={logo} alt={logoAltText} />
        </LogoContainer>
    )
}

export default NavLogo


const LogoContainer = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  height: -webkit-fill-available;
  width: -webkit-fill-available;
  cursor: pointer;
  width: fit-content;
  //https://web.dev/optimize-cls/?utm_source=lighthouse&utm_medium=devtools#images-without-dimensions
  img {
    width: clamp(150px, 15vw, 300px);
    height: auto;
  }
`
