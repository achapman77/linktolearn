import React, {useState, useEffect} from "react"
import styled from 'styled-components'
import { Link } from 'gatsby';
//data
import { menuData } from "./MenuData"

//components
import NavLogo from "./NavLogo"
import { Button } from "../buttons/Button"
import NavTopper from "./NavTopper";

//icons
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


// import scrollToElement from 'scroll-to-element';
import animateScrollTo from 'animated-scroll-to';

const Navbar = ({isOpen, toggle, logo, logoAltText}) => {
  const [navbar, setNavbar] = useState(false)
  const [offset, setOffset] = useState(0)
  const [navItems, setNavItems] = useState(menuData)
  const [observerState, setObserverState] = useState(true)
  const [anchor, setAnchor] = useState(false)
  

  

  //Pages other than index, header is solid
  useEffect(() => {
    if(window.location.pathname === "/") {
      setNavbar(false)
    } else {
      setNavbar(true)
    }
  }, [])

  useEffect(() => {
    const updateNavState = (anchor) => {
      const newNavList = navItems.map( (item) => {
        item.isActive = false
        if (item.link === `/#${anchor}`) {
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
    updateNavState(anchor)
  },[anchor])
  
  //When user scrolls on index header turns from transparent to solid
  const handleNavbarOnScroll = () => {
    setOffset(window.pageYOffset)
  }

  useEffect(() => {
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
    if (observerState) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 0.5) {
              let elem = entry.target
              let sectionID = elem.id
              setAnchor(sectionID)
            }
          }
        })
      }, { threshold: [0.5] });


      navItems.forEach((item) => {
        let pathArr = item.link.split("#")
        let page = pathArr[0]
        let section = pathArr[1]
        if (window.location.pathname === page && section) {
           observer.observe(document.querySelector(`#${section}`));
        }
      })
      
      return () => {
        // console.info('clean up')
        navItems.forEach((item) => {
          let pathArr = item.link.split("#")
          let page = pathArr[0]
          let section = pathArr[1]
          if (window.location.pathname === page && section) {
            // console.info({xx:window.location.pathname, page, section})
            observer.unobserve(document.querySelector(`#${section}`));
          }
        })
      }
    } 
      

  }, [observerState, navItems]) 


  const handleMenuLinkClick = (navItem, e) => {
    console.info('handleMenuLinkClick()')
    if (typeof window !== 'undefined' && navItem.link.includes('#')) {
      const [anchorPath, anchor] = navItem.link.split('#');
      if (window.location.pathname === anchorPath) {
        e.preventDefault();
        //disable scroll
        setObserverState(false)
        setAnchor(anchor)

        //animate scroll
        let options = {
          verticalOffset: -80,
          speed: 500,
          easing: (t) => { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t },
        }
        animateScrollTo(document.querySelector(`#${anchor}`, {options}))
        .then(hasScrolledToPosition => {
          if (hasScrolledToPosition) {
            setObserverState(true)
          } else {
            // scroll animation was interrupted by user
            // or by another call of "animateScrollTo"
          }
        });
      }
    }
  }



  return (
    <>
    <NavTopper/>
    <Nav id="navbar" isOpen={isOpen} navbar={navbar} className={offset >= 80 ? 'active' : ''}>
      <NavLogo logo={logo} logoAltText={logoAltText}/>
      <NavMenu>
        {navItems.map( (v,i) => (
            <NavItem  key={i}>
              <NavLink
             
              data-id={`nav_${v.title.toLowerCase()}`}
              to={v.link}
              onClick={e => handleMenuLinkClick(v, e)}
              activeClassName='active'
              className={v.isActive ? 'active' : ''}
              >
              <span>{v.title}</span>
              </NavLink>
            </NavItem>
          ))

        }
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/">Call to Action</Button>
      </NavBtn>
      <MobileMenuIcon onClick={toggle}>
        {!isOpen && <AiOutlineMenu />}
        {isOpen && <AiOutlineClose />}
      </MobileMenuIcon>
      
    </Nav>
    </>
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

const NavItem = styled.li`
    height: -webkit-fill-available;
`

const NavLink = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: clamp(80px, 5vw, 5vw);
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    border-bottom: 4px solid transparent;

    &.active {
    border-bottom: 4px solid ${props => props.theme.colors.primary.main};
    }
    &:hover {
      border-right: 1px solid rgba(255,255,255, 0.125);
      border-left: 1px solid rgba(255,255,255, 0.125);
      background: rgba(255,255,255, 0.05);
    }
`