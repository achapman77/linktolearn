import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { animateScroll as scroll } from "react-scroll"

//components
import loadable from "@loadable/component"
const SocialMedia = loadable( () => import("./buttons/SocialMedia"))

const Footer = ({logo}) => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer id="footer">
            <FooterLinksWrapper>
                <FooterDesc>
                    <LogoContainer to="/" onClick={toggleHome}>
                        <img src={logo.img} alt={logo.altText} width={logo.width} height={logo.height}/>
                    </LogoContainer>
                    <p>An Immersive Learning Ecosystem for Emergency Medical Professionals</p>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>About</FooterLinkTitle>
                    <FooterLink to="/#team">Team</FooterLink>
                    <FooterLink to="/#partners">Partners</FooterLink>
                    <FooterLink to="/#clients">Clients</FooterLink>
                    <FooterLink to="/faq">FAQ</FooterLink>
                    <FooterLink to="/blog">Blog</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Services</FooterLinkTitle>
                    <FooterLink to="/services/mobile_bioskills_labs">Mobile BioSkills Labs</FooterLink>
                    <FooterLink to="/services/realx_mixed_reality_training">REAL-X Immersive Training</FooterLink>
                    <FooterLink to="/services/beast_human_performance_metrics">BEAST Performance Metrics</FooterLink>
                    <FooterLink to="/services/dynamic_scenario_authoring_system">Rapid Scenario Authoring</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Follow Us</FooterLinkTitle>
                    <SocialMedia variant="footer"/>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px) / 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: #fafafb;

    @media screen and (max-width: 400px) {
        grid-template-columns: 1fr;
    }
`

const FooterDesc = styled.div`
    padding: 0 2rem;

    p { margin-top: 1.5rem;}
    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`
const LogoContainer = styled(Link)`
    width: clamp(50px, 15vw, 100px);
    margin-bottom: 1rem;
    img {
        width: 100%;
        height: auto;
        max-width: 8rem;
        margin: 0 auto;
    }
`

const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;
    }

`

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }

`

const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
`

const FooterLink = styled(Link)`
   text-decoration: none;
   margin-bottom: 0.5rem;
   font-size: 14px;
   color: #3d3d4e;
   padding: 1rem 0;
   width: -webkit-fill-available;

   &:hover {
       color: ${props => props.theme.colors.primary.main};
       transition: 0ms.3s ease-out;
   }
`

