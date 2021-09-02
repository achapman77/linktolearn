import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { animateScroll as scroll } from "react-scroll"
import SocialMedia from './buttons/SocialMedia'

const Footer = ({logo, logoAltText}) => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer id="footer">
            <FooterLinksWrapper>
                <FooterDesc>
                    <LogoContainer to="/" onClick={toggleHome}>
                        <img src={logo} alt={logoAltText} />
                    </LogoContainer>
                    <p>We strive to create the best experiences for our customers</p>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to="/about">Contact</FooterLink>
                    <FooterLink to="/">Support</FooterLink>
                    <FooterLink to="/">Destinations</FooterLink>
                    <FooterLink to="/">Sponsorships</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to="/">Submit Videos</FooterLink>
                    <FooterLink to="/">Ambassadors</FooterLink>
                    <FooterLink to="/">Agency</FooterLink>
                    <FooterLink to="/">Influencer</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
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
    width: clamp(150px, 15vw, 200px);
    margin-bottom: 1rem;
    img {
        width: 100%;
        height: auto;
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
       color: #f26a2e;
       transition: 0ms.3s ease-out;
   }
`

