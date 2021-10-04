import React from 'react'
import styled from 'styled-components'

//data
import { menuData } from './MenuData'

//components
import { Link } from 'gatsby'
import { Button } from "../buttons/Button"
import loadable from "@loadable/component"
import { GoChevronDown } from 'react-icons/go'
const SocialMedia = loadable( () => import("../buttons/SocialMedia"))
const QuickConnectBtns = loadable( () => import("../buttons/QuickConnectBtns"))


const NavMobile = ({isOpen, toggle}) => {
    const toggleDropdown = (navItem, e) => {
        console.info('toggleDropdown=>')
        e.preventDefault()
        let btnID = `dropdownBtn_${navItem.title.toLowerCase()}`
        let btn = document.getElementById(btnID)
        // let dropdownID = `dropdownMenu_${navItem.title.toLowerCase()}`
        // let dropdown = document.getElementById(dropdownID)
        
        if (btn.classList.contains('active')){
        // dropdown.classList.remove('active')
        btn.classList.remove('active')
        } else {
        // dropdown.classList.add('active')
        btn.classList.add('active')
        }

        // if (e.type === 'mouseleave') {
        // btn.classList.remove('active')
        
        // }
        
        console.info({navItem, e:e.target})
    }
    return (
        <NavMobileContainer 
            isOpen={isOpen} 
            onClick={e => toggle(e)}
        >
            <Rudder>
                <QuickConnectBtns className="navMobile"/>
                <SocialMedia variant="navMobile"/>
            </Rudder>
            <Wrapper>
                <Menu>
                    {menuData.map((v,i) =>{
                        if (!v.subItems) {
                        return (
                            <NavItem key={i}>
                                <NavLink to={v.link} className="pageLink">
                                    {v.title}
                                </NavLink>
                            </NavItem> 
                        )
                        } 
                        else {
                            return (
                                <NavItem 
                                    className="dropdownBtn" 
                                    key={i} 
                                    id={`dropdownBtn_${v.title.toLowerCase()}`}
                                    onClick={e => toggleDropdown( v, e)}
                                    // onMouseEnter = {e => toggleDropdown(v,e)}
                                    // onMouseLeave = {e => toggleDropdown(v,e)}
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
                    })}
                </Menu>
                {/* <BtnWrap>
                    <Button primary="true" round="true" to="/#contact">
                        Contact Us
                    </Button>
                </BtnWrap> */}
            </Wrapper>
            
        </NavMobileContainer>
    )
}

export default NavMobile

const NavMobileContainer = styled.aside`
    position: fixed;
    z-index: 90;
    width: 100vw;
    height: 100vh;
    background: white;
    /* display: grid; */
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    top: ${({ isOpen }) => (isOpen ? "0" : "-110vh")};
    /* border: 1px solid red; */

`

const Wrapper = styled.div`
    color: ${props => props.theme.colors.gray.dark};
    transition: 0.3s ease-in-out;
`

const Menu = styled.ul`
    display: flex;
    flex-flow: column;
    /* grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px); */
    text-align: center;
    margin-bottom: 4rem;
    margin-top: 0.5rem;
    list-style: none;
    

    ${props => props.theme.xs`
        grid-template-rows: repeat(4, 60px);
    `}


`
const NavItem = styled.li`
    height: auto;
    display: flex;
    
    a, button {
        font-size: clamp(1rem, 5vw, 1.25rem);
        text-transform: uppercase;
        letter-spacing: 2px;
        color: ${props => props.theme.colors.gray.dark};
        text-decoration: none;
        cursor: pointer;
        padding: 1rem clamp(1rem, 5vw, 2rem);
        width: -webkit-fill-available;
        text-align: left;
        border: none;
        border-bottom: 0.5px solid ${props => props.theme.colors.gray.light};
        border-left: 5px solid transparent;
    }
    button {
      background: inherit;
      display: flex;
      align-items: center;
    }
    &.dropdownBtn {
        display: flex;
        flex-flow: column;
        height: auto;
        padding: 0;
    }
    &.dropdownBtn.active {
      svg {transform: rotateX(-180deg);}
      .dropdownMenu {
        display: flex;
        opacity: 1;
        transform: translateY(0px);
      }
    }
    &:hover .pageLink, &:hover button {
        background: ${props => props.theme.colors.gray.light};
        border-left: 5px solid ${props => props.theme.colors.primary.main};
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
    svg {
          font-size: 1.5rem;
          margin-top: -2px;
          transition: 350ms
    }
`

const NavLink = styled(Link)`

`

const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

const Rudder = styled.div`
    display: flex;
    height: 48px;
    margin-top: 80px;
    padding-right: 1rem;
    background: ${props => props.theme.colors.gray.dark};
    justify-content: space-between;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`

const DropdownMenu = styled.div`
    display: flex;
    flex-flow: column;
    opacity: 0;
    transform: translateY(-30px);
    display: none;
    transition: 500ms all;
    a {
        font-size: clamp(0.75rem, 4vw, 1.25rem);
        padding: 1rem clamp(1rem, 10vw, 4rem);
        text-decoration: none;
        width: -webkit-fill-available;
        white-space: nowrap;
        text-align: left;
        background: rgba(0,0,0, 0.03);
        border-top: 1px solid transparent;
        border-left: 5px solid transparent;
        border-bottom: 1px solid ${props => props.theme.colors.gray.light};
        &:last-child {
            border-bottom: none;
        }
        &:hover {
            background: ${props => props.theme.colors.gray.light};
            border-left: 5px solid ${props => props.theme.colors.primary.main};
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        }
        ${props => props.theme.xxs`
            padding: 1rem;
        `}
    }
`
