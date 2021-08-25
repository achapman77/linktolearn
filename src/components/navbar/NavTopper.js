import React from 'react'
import styled from 'styled-components'
// import { useStaticQuery, graphql } from 'gatsby'

//components
import SocialMedia from '../layout/SocialMedia';
import QuickConnectBtns from '../buttons/QuickConnectBtns';


const NavTopper = () => {
        
    return (
        <Container>
            <QuickConnectBtns className='navTopper' />
            <MessageWrapper>
                <div id="message_1">Speak with an Expert</div>
                <div id="message_2">Mon - Fri: 7am - 10pm</div>
            </MessageWrapper>
            <SocialMedia variant="navTopper" animate={true} delay={0}/>
        </Container>
    )
}

export default NavTopper

const Container = styled.div`
    display: flex;
    align-items: center;
    padding-right: clamp(1rem, 1vw, 2rem);;
    color: white;
    font-size: clamp(0.75rem, 1vw, 1rem);
    font-weight: bold;
    background: ${props => props.theme.colors.secondary.dark};
    height: fit-content;
    position: sticky;
    justify-content: space-between;
    ${props => props.theme.sm`
        display:none;
    `}
`

const MessageWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: clamp(1rem, 1vw, 2rem);
`
