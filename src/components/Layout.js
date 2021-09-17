import React, {useState} from "react"
import Theme from "../styles/Theme"
import { GlobalStyle } from "../styles/GlobalStyles"
import NavMobile from "./navbar/NavMobile"
import Navbar from "./navbar/Navbar"
import LogoMain from '../assets/images/logos/logo_main.png'
import LogoAlternate from '../assets/images/logos/logo_alternate.png'
import loadable from "@loadable/component"
const Footer = loadable( () => import("./Footer"))

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  //Upate These
  const altText = 'Company Logo'
  const logoWidth = '300'
  const logoHeight = '62'

  const logoMain = {
    img: LogoMain,
    altText: altText,
    width: logoWidth,
    height: logoHeight
  }

  const logoAlt = {
    img: LogoAlternate,
    altText: altText,
    width: logoWidth,
    height: logoHeight
  }

  return (
    <Theme style={{ maxHeight: 300 }}>
        <GlobalStyle/>
        <NavMobile isOpen={isOpen} toggle={toggle}/>
        <Navbar isOpen={isOpen} toggle={toggle} logo={logoMain} />
          <main>{children}</main>
        <Footer logo={logoAlt}/>
    </Theme>
  )
}


export default Layout
