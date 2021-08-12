import React from 'react'
import styled from 'styled-components'
import { Button } from "../Button"
import { menuData } from '../../data/MenuData'
import { Link } from 'gatsby'

const NavMobile = ({isOpen, toggle}) => {
    return (
        <NavMobileContainer isOpen={isOpen} onClick={toggle}>
            {/* <Icon onClick={toggle}>
                <CloseIcon />
            </Icon> */}
            <Wrapper>
                <Menu>
                    {menuData.map((v,i) =>{
                        return (
                            <NavItem>
                                <NavLink to={v.link} key={i}>
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
        </NavMobileContainer>
    )
}

export default NavMobile

const NavMobileContainer = styled.aside`
    position: fixed;
    z-index: 90;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.gray.dark};
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    /* opacity: ${({ isOpen }) => (isOpen ? "1" : "0")}; */
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    

`

const Wrapper = styled.div`
    color: ${props => props.theme.colors.white};
    transition: 0.3s ease-in-out;
`

const Menu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;
    list-style: none;

    ${props => props.theme.xs`
        grid-template-rows: repeat(4, 60px);
    `}


`
const NavItem = styled.li`
    height: -webkit-fill-available;
`

const NavLink = styled(Link)`
    /* display: flex;
    align-items: center;
    justify-content: center; */
    ${props => props.theme.flexCenter}
    height: -webkit-fill-available;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    transition: 0.2s ease-in-out;
    

    &:hover {
        color: ${props => props.theme.colors.orange};
    }
`

const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`


