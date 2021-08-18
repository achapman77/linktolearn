import React, {useState, useEffect} from "react"
import styled from 'styled-components'
//data
import { menuData } from "../../data/MenuData"
//components
import NavLogo from "./NavLogo"
import { renderNavItems } from './NavItems'
import { Button } from "../Button"
//icons
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Navbar = ({isOpen, toggle, logo, logoAltText}) => {
  const [navbar, setNavbar] = useState(false)
  const [offset, setOffset] = useState(0)
  const [navItems, setNavItems] = useState(menuData)
 
  // Resource
  // https://vidler.app/blog/javascript/gatsby-scroll-position/
  

  //Pages other than index, header is solid
  useEffect(() => {
    console.info('setNavbar')
    if(window.location.pathname === "/") {
      setNavbar(false)
    } else {
      setNavbar(true)
    }
  }, [])
  
  //When user scrolls on index header turns from transparent to solid
  const handleNavbarOnScroll = () => {
    setOffset(window.pageYOffset)
  }

  useEffect(() => {
    console.info('setOffset')
    if (typeof window !== `undefined`) {
      window.addEventListener('scroll', handleNavbarOnScroll)
    }
    return () => {
      window.removeEventListener('scroll', handleNavbarOnScroll)
    }
  }, [])


  //Registers #on_page_sections and watches for page scroll to set active state of nav button
  
  useEffect(() => {
    var observer
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 0.5) {
              let elem = entry.target
              let sectionID = elem.id
              updateNavState(sectionID)
            }
          }
        })
      }, { threshold: [0.5], delay: 1000 });


      navItems.forEach((item) => {
        let pathArr = item.link.split("#")
        let page = pathArr[0]
        let section = pathArr[1]
        if (window.location.pathname === page && section) {
           observer.observe(document.querySelector(`#${section}`));
        }
      })
      
      return () => {
        console.info('clean up')
        navItems.forEach((item) => {
          let pathArr = item.link.split("#")
          let page = pathArr[0]
          let section = pathArr[1]
          if (window.location.pathname === page && section) {
            console.info({xx:window.location.pathname, page, section})
            observer.unobserve(document.querySelector(`#${section}`));
          }
        })
      }

  }, []) 

  const updateNavState = (sectionID) => {
    const newNavList = navItems.map( (item) => {
      if (item.link === `/#${sectionID}`) {
        const updatedItem = {
          ...item,
          isActive: !item.isActive,
        }
        return updatedItem
      }
      return item
    })
    setNavItems(newNavList)
  }

  return (
    <Nav isOpen={isOpen} navbar={navbar} className={offset >= 80 ? 'active' : ''}>
      <NavLogo logo={logo} logoAltText={logoAltText}/>
      <NavMenu>
        { renderNavItems(navItems, updateNavState)}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/">Call to Action</Button>
      </NavBtn>
      <MobileMenuIcon onClick={toggle}>
        {!isOpen &&
          <AiOutlineMenu />
        }
        {isOpen && 
          <AiOutlineClose />
        }
      </MobileMenuIcon>
      
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  background: ${ ({ navbar, isOpen }) => (navbar || isOpen ? props => props.theme.colors.gray.dark : "transparent")};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 calc((100vw - 1300px) / 2);
  z-index: 100;
  position: sticky;
  top:0;

  &.active {
    background: ${props => props.theme.colors.gray.dark};
  }
`
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const MobileMenuIcon = styled.div`
  display: none;
  color:#ffff;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    font-size: 1.8rem;
    cursor: pointer;
  }
`


const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`