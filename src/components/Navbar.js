import React, {useState, useEffect} from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { animateScroll as scroll } from "react-scroll"
import styled from 'styled-components'
//data
import { menuData } from "../data/MenuData"
//components
import { renderNavItems } from './NavItems'
import { Button } from "./Button"
//icons
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = ({isOpen, toggle, logo}) => {
  const [navbar, setNavbar] = useState(false)
  const [offset, setOffset] = useState(0)
  const [navItems, setNavItems] = useState(menuData)
  const data = useStaticQuery(graphql`
        query {
            allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["logo_"]}}) 
            {
                edges {
                    node {
                        childImageSharp {
                            gatsbyImageData
                            id
                        }
                        name
                    }
                }
            }
        }
    `)
  // let image = getImage(data.allFile.edges[0].node)

  console.info({data})


  // Resource
  // https://vidler.app/blog/javascript/gatsby-scroll-position/
  var observer
  useEffect(() => {
    //Pages other than index, header is solid
    if(window.location.pathname === "/") {
      setNavbar(false)
    } else {
      setNavbar(true)
    }
    
    //When user scrolls on index header turns from transparent to solid
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        setOffset(window.pageYOffset)
      }
    }

    //Registers #on_page_sections and watches for page scroll to set active state of nav button
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
        //currently only registers sections on index page.  
        //Need to make it so it registers sections on any current page
        //Using window.location.pathname === path to set current page observers results in weird behavior
        
        let section = item.link.replace("/","")
        // let path = item.link.split("#")
        // console.info({path})
        if (window.location.pathname === "/" && section.includes("#") ) {
          console.info(section)
           observer.observe(document.querySelector(section));
        }
      })

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

  const toggleHome = () => {
    scroll.scrollToTop()
  }



  return (
    <Nav isOpen={isOpen} navbar={navbar} className={offset >= 80 ? 'active' : ''}>
      {/* <LogoContainer to="/" onClick={toggleHome}>
        {!isOpen &&
          <LogoImage image={image} alt={data.allFile.edges[0].node.name}/>
        }
        
      </LogoContainer> */}
      <NavMenu>
        { renderNavItems(navItems)}
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
const LogoImage = styled(GatsbyImage)`
  max-width: 300px;
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