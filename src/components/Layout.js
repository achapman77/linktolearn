import React, {useEffect, useState} from "react"
import Theme from "../styles/Theme"
import { GlobalStyle } from "../styles/GlobalStyles"
import NavMobile from "./navbar/NavMobile"
import Navbar from "./navbar/Navbar"
import LogoMain from '../assets/images/logos/logo_main.png'
import LogoAlternate from '../assets/images/logos/logo_alternate.png'
import Footer from "./Footer"

//animation
import Aos from 'aos'
import "aos/dist/aos.css"


const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = (e) => {
    console.info('toggle=>')
    if (!e.target.closest('.dropdownBtn')) {
      setIsOpen(!isOpen)
    }
    
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

  useEffect( () => {
        Aos.init({disable: 'mobile'})
    }, [])

  return (
    <Theme style={{ maxHeight: 300 }}>
        <GlobalStyle/>
        <NavMobile isOpen={isOpen} toggle={e => toggle(e)}/>
        <Navbar isOpen={isOpen} toggle={toggle} logo={logoMain} />
          <main>{children}</main>
        <Footer logo={logoAlt}/>
    </Theme>
  )
}


export default Layout
