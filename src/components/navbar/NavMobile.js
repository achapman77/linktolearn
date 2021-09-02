import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

//components
import { Button } from "../buttons/Button"
import SocialMedia from '../buttons/SocialMedia'
import QuickConnectBtns from '../buttons/QuickConnectBtns';

//data
import { menuData } from './MenuData'




const NavMobile = ({isOpen, toggle}) => {

    return (
        <NavMobileContainer isOpen={isOpen} onClick={toggle}>
            <Wrapper>
                <Menu>
                    {menuData.map((v,i) =>{
                        return (
                            <NavItem key={i}>
                                <NavLink to={v.link} >
                                    {v.title}
                                </NavLink>
                            </NavItem> 
                        )
                    })}
                </Menu>
                <BtnWrap>
                    <Button primary="true" round="true" to="/">
                        Call to Action
                    </Button>
                </BtnWrap>
            </Wrapper>
            <Rudder>
                <QuickConnectBtns className="navMobile"/>
                <SocialMedia variant="navMobile"/>
            </Rudder>
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
    display: grid;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    /* border: 1px solid red; */

`

const Wrapper = styled.div`
    color: ${props => props.theme.colors.gray.dark};
    transition: 0.3s ease-in-out;
`

const Menu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;
    margin-top: 5rem;
    list-style: none;
    

    ${props => props.theme.xs`
        grid-template-rows: repeat(4, 60px);
    `}


`
const NavItem = styled.li`
    height: -webkit-fill-available;
    display: flex;
    border-bottom: 0.5px solid ${props => props.theme.colors.gray.light};
    /* box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; */
    padding: 0 2rem;
    &:hover {
         a {color: ${props => props.theme.colors.orange};}
         /* box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; */
         /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
         box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
`

const NavLink = styled(Link)`
    /* display: flex;
    align-items: center;
    justify-content: center; */
    ${props => props.theme.flexCenter}
    height: -webkit-fill-available;
    font-size: 1.25rem;
    text-decoration: none;
    list-style: none;
    color: ${props => props.theme.colors.gray.dark};
    cursor: pointer;
    transition: 0.2s ease-in-out;
    

    
`

const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

const Rudder = styled.div`
    display: flex;
    margin-top: auto;
    padding-right: 1rem;
    background: ${props => props.theme.colors.gray.dark};
    justify-content: space-between;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`


