import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import { animateScroll as scroll } from "react-scroll"
// import scrollToElement from 'scroll-to-element';
// import { map } from 'lodash';
// import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { menuData } from "../data/MenuData"
import { renderNavItems } from './NavItems'
import { Button } from "./Button"

const Navbar = ({toggle, logo}) => {
  const [navbar, setNavbar] = useState(false)
  const [offset, setOffset] = useState(0)
  const [navItems, setNavItems] = useState(menuData)

  //Pages other than index, header is solid
  useEffect( () => {
    if(window.location.pathname === "/") {
      setNavbar(false)
    } else {
      setNavbar(true)
    }
  }, [])
  
  //When user scrolls on index header turns from transparent to solid
  // https://vidler.app/blog/javascript/gatsby-scroll-position/
  var observer
  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        setOffset(window.pageYOffset)
      }
    }

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            
            if (entry.intersectionRatio >= 0.5) {
              let elem = entry.target
              console.info(elem)
              let sectionID = elem.id
              console.info({sectionID})
              updateNavState(sectionID)
            }
          }
        })

      }, { threshold: [0.5], delay: 1000 });

      // first target
      // observer.observe(document.querySelector("#trips"));
      navItems.forEach((item) => {
        let section = item.link.replace("/","")
        
        // console.info(document.querySelector(section))
        if (window.location.pathname === "/" && section.includes("#") ) {
          console.info(section)
           observer.observe(document.querySelector(section));
        }
      })

  }, []) 

  const updateNavState = (sectionID) => {
    console.info('updateNaveState()')
    const newNavList = navItems.map( (item) => {
      // item.isActive = false
      console.info({link:item.link, linkMatch:`/#${sectionID}`})
      if (item.link === `/#${sectionID}`) {
        console.info('updateItem')
        const updatedItem = {
          ...item,
          isActive: !item.isActive,
        }
        console.info({xx:updatedItem})
        return updatedItem
      }
      return item
    })
    console.info(newNavList)
    setNavItems(newNavList)
  }

  const toggleHome = () => {
    scroll.scrollToTop()
  }



  return (
    <Nav navbar={navbar} className={offset >= 80 ? 'active' : ''}>
      <LogoContainer to="/" onClick={toggleHome}>{logo}</LogoContainer>
      <NavMenu>
        { renderNavItems(navItems)}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/trips">Call to Action</Button>
      </NavBtn>
      <Bars onClick={toggle}/>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  background: ${ ({ navbar }) => (navbar ? "#141414" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 calc((100vw - 1300px) / 2);
  z-index: 100;
  position: sticky;
  top:0;

  &.active {
    background: #141414;
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
// const NavItem = styled.li`
//     height: 100%;
//     width: 4vw;
//     display: flex;
//     justify-content: center;
    
//     a {
//       color: white;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       text-decoration: none;
//       padding: 0 1rem;
//       height: -webkit-fill-available;
//       width: -webkit-fill-available;
//       cursor: pointer;
//       border-bottom: 4px solid transparent;

//       &.active {
//         border-bottom: 4px solid ${props => props.theme.colors.primary.main};
//       }
//     }
    
// `

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
`

const Bars = styled(FaBars)`
  display: none;
  color:#ffff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
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