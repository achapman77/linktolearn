import React from 'react'
import styled from 'styled-components'
import { Button } from "./Button"
import { FaTimes } from 'react-icons/fa'
import { menuData } from '../data/MenuData'
import { Link } from 'gatsby'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((v,i) =>{
                        return (
                            <DropdownLink to={v.link} key={i}>
                                {v.title}
                            </DropdownLink>
                        )
                    })}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary="true" round="true" to="/trips">
                        Book a Flight
                    </Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown

const DropdownContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.darkGray};
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    

`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
const CloseIcon = styled(FaTimes)`
    color: ${props => props.theme.colors.white};
    
`

const DropdownWrapper = styled.div`
    color: ${props => props.theme.colors.white};
    transition: 0.3s ease-in-out;
`

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    

    ${props => props.theme.xs`
        grid-template-rows: repeat(4, 60px);
    `}


`

const DropdownLink = styled(Link)`
    /* display: flex;
    align-items: center;
    justify-content: center; */
    ${props => props.theme.flexCenter}
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


