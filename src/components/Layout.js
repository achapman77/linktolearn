import React, {useState} from "react"
import Theme from "../styles/Theme"
// import { ParallaxProvider } from 'react-scroll-parallax';
import NavMobile from "./navbar/NavMobile"
import Footer from "./Footer"
import Navbar from "./navbar/Navbar"
import { GlobalStyle } from "../styles/GlobalStyles"

import LogoMain from '../assets/images/logos/logo_main.png'
import LogoAlternate from '../assets/images/logos/logo_alternate.png'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const logoAltText = 'Company XYZ'

  return (
    
      <Theme style={{ maxHeight: 300 }}>
        {/* <ParallaxProvider> */}
          <GlobalStyle/>
          <NavMobile isOpen={isOpen} toggle={toggle}/>
          <Navbar isOpen={isOpen} toggle={toggle} logo={LogoMain} logoAltText={logoAltText}/>
            <main>{children}</main>
          <Footer logo={LogoAlternate} logoAltText={logoAltText}/>
        {/* </ParallaxProvider>   */}
      </Theme>
    
    
  )
}


export default Layout
