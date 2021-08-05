import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { menuData } from "../data/MenuData"
import { Button } from "./Button"

const Header = ({toggle}) => {
  const [navbar, setNavbar] = useState(false)
  const [navbarBackground, setNavbarBackground] = useState(false)
  
  
  useEffect( () => {
    if(window.location.pathname === "/") {
      setNavbar(false)
    } else {
      setNavbar(true)
    }

    

    // console.log(window.location.pathname)
  }, [])

  const changeNavBackground = () => {
    console.info(window.scrollY)
    if (window.scrollY >= 80) {
      setNavbarBackground(true)
    } else {
      console.info(false)
      setNavbarBackground(false)
    }
  }
  window.addEventListener('scroll', changeNavBackground)

  return (
    <Nav navbar={navbar} className={navbarBackground ? 'active' : ''}>
      <NavLink to="/">EXPLORIX</NavLink>
      <NavMenu>
        {menuData.map((v,i)=>{
          // console.info(v)
          return (
            <NavLink to={v.link} key={i}>
              {v.title}
            </NavLink>
          )
        })}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/trips">Book A Flight</Button>
      </NavBtn>
      <Bars onClick={toggle}/>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: ${ ({ navbar }) => (navbar ? "#141414" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: sticky;
  top:0;

  &.active {
    background: #141414;
  }
`

const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
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
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* margin-right: -48px; */

  @media screen and (max-width: 768px) {
    display: none;
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