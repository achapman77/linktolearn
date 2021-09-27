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
import { GoChevronDown } from 'react-icons/go'

// import scrollToElement from 'scroll-to-element';
import animateScrollTo from 'animated-scroll-to';

const Navbar = ({isOpen, toggle, logo}) => {
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
    // console.info('handleMenuLinkClick()')
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

  const [servicesBtnState, setServicesBtnState] = useState(false)
  // useEffect( () => {
  //   console.info('foo')
  // },[servicesBtnState])
  const toggleDropdown = (navItem, e) => {
    console.info('toggleDropdown=>')
    let btnID = `dropdownBtn_${navItem.title.toLowerCase()}`
    let btn = document.getElementById(btnID)
    // let dropdownID = `dropdownMenu_${navItem.title.toLowerCase()}`
    // let dropdown = document.getElementById(dropdownID)
    
    if (servicesBtnState === 'active'){
      // console.info('remove active')
      // btn.classList.remove('active')
      setServicesBtnState(false)
    } else {
      // console.info('add active')
      // btn.classList.add('active')
      setServicesBtnState('active')
    }

    if (e.type === 'mouseleave') {
      setServicesBtnState(false)
    }
    
    console.info({btnID, btn})
    console.info(servicesBtnState)
  }

  return (
    <>
    <NavTopper/>
    <Nav id="navbar" isOpen={isOpen} navbar={navbar} className={offset >= 80 ? 'active' : ''}>
      <NavLogo logo={logo}/>
      <NavMenu>
        {navItems.map( (v,i) => {
          if (!v.subItems) {
            return (
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
            )
          } else {
            return (
                <NavItem 
                  className={`dropdownBtn ${servicesBtnState ? 'active' : ''}`} 
                  key={i} 
                  id={`dropdownBtn_${v.title.toLowerCase()}`}
                  onClick={e => toggleDropdown(v,e)}
                  onMouseEnter = {e => toggleDropdown(v,e)}
                  onMouseLeave = {e => toggleDropdown(v,e)}
                >
                    <button className="label" >
                      {v.title}<GoChevronDown />
                    </button>
                    <DropdownMenu id={`dropdownMenu_${v.title.toLowerCase()}`} className="dropdownMenu">
                      {
                        v.subItems.map( (v2, i2) => {
                          return (
                            <Link to={v2.link} key={i2}>{v2.title}</Link>
                          )
                        })
                      }
                    </DropdownMenu>
                </NavItem>
            )
          }
            
        })

        }
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/#contact">Contact Us</Button>
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
  background: ${ ({ navbar, isOpen }) => (navbar || isOpen ? "white" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 calc((100vw - 1300px) / 2);
  z-index: 100;
  position: sticky;
  top:0;
  

  &.active {
    background: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    /* background: white; */
  }
`
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 992px) {
    display: none;
  }
`

const MobileMenuIcon = styled.div`
  display: none;
  color:${props => props.theme.colors.gray.dark};

  @media screen and (max-width: 992px) {
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

  @media screen and (max-width: 992px) {
    display: none;
  }
`

const NavItem = styled.li`
    height: -webkit-fill-available;
    display: flex;
    align-items: center;
    border-right: 1px solid transparent;
    border-left: 1px solid transparent;
    a, .label {
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 2px;
        color: ${props => props.theme.colors.gray.dark};
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        min-width: 150px;
        /* width: clamp(80px, 5vw, 5vw); */
        text-decoration: none;
        padding: 0 1rem;
        cursor: pointer;
        border-bottom: 4px solid transparent;
        &.active {
          border-bottom: 4px solid ${props => props.theme.colors.primary.main};
        }
        
    }
    button {
      border: none;
      font-size: inherit;
      font-weight: bold;
      background: inherit;
      border-bottom: 4px solid transparent;
    }
    &.dropdownBtn {
      position: relative;
      span { 
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &.dropdownBtn.active {
      svg {transform: rotate(-180deg);}
      .dropdownMenu {
        display: flex;
        opacity: 1;
      }
    }
    &:hover {
          border-right: 1px solid rgba(0,0,0, 0.25);
          border-left: 1px solid rgba(0,0,0, 0.25);
          /* border-bottom: 4px solid ${props => props.theme.colors.secondary.dark}; */
          background: rgba(0,0,0, 0.05);
        }
    svg {
          font-size: 1.5rem;
          transition: 350ms;
          margin-top: -2px;
          /* margin-right: 1rem; */
    }
`
// const NavDropdown = styled.li`

// `

const DropdownMenu = styled.div`
  /* display: flex; */
  flex-flow: column;
  border-top: 1px solid ${props => props.theme.colors.gray.light};
  position: absolute;
  top: 76px;
  left: --1px;
  background: white;
  width: max-content;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  display: none;
  opacity: 0;
  transition: 500s all;
  a {
    padding: 1rem;
    padding-right: 3rem;
    text-decoration: none;
    width: -webkit-fill-available;
    white-space: nowrap;
    justify-content: left;
    align-items: center;
    border-top: 1px solid transparent;
    border-bottom: 1px solid ${props => props.theme.colors.gray.light};
    border-left: 4px solid transparent;
    &:hover {
      background: ${props => props.theme.colors.gray.light};
      border-top: 1px solid rgba(0,0,0, 0.25);
      border-bottom: 1px solid rgba(0,0,0, 0.25);
      border-left: 4px solid ${props => props.theme.colors.primary.main};
    }
  }
`
const NavLink = styled(Link)`
`