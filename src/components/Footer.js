import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { animateScroll as scroll } from "react-scroll"

//components
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import loadable from "@loadable/component"
const SocialMedia = loadable( () => import("./buttons/SocialMedia"))

const Footer = ({logo}) => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer id="footer">
            <FooterWrapper>
                <FooterDesc>
                    <span>
                        <LogoContainer to="/" onClick={toggleHome}>
                            <img src={logo.img} alt={logo.altText} width={logo.width} height={logo.height}/>
                        </LogoContainer>
                        <p>An Immersive Training Ecosystem for Emergency Medical Professionals</p>
                    </span>
                    
                    
                    <FooterLinkItems className="socialMedia"> 
                        <SocialMedia variant="footer"/>
                    </FooterLinkItems>
                </FooterDesc>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Products & Services</FooterLinkTitle>
                        <FooterLink to="/services/mobile_bioskills_labs">Mobile BioSkills Labs</FooterLink>
                        <FooterLink to="/services/realx_mixed_reality_training">REAL-X Immersive Training</FooterLink>
                        <FooterLink to="/services/beast_human_performance_metrics">BEAST Performance Metrics</FooterLink>
                        <FooterLink to="/services/dynamic_scenario_authoring_system">Rapid Scenario Authoring</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Company</FooterLinkTitle>
                        <FooterLink to="/#team">Our Team</FooterLink>
                        <FooterLink to="/#partners">R&D Partners</FooterLink>
                        <FooterLink to="/#clients">Customers</FooterLink>
                    </FooterLinkItems>
                    
                    <FooterLinkItems>
                        <FooterLinkTitle>Support</FooterLinkTitle>
                        <FooterLink to="/faq">FAQ</FooterLink>
                        <FooterLink to="/blog">Blog</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterWrapper>
            <Row>
                <span>
                    <AiOutlineCopyrightCircle/>2021 Link to Learn
                </span>
                
            </Row>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1515px) / 2);
    color:  ${props => props.theme.colors.gray.dark};
    background:  ${props => props.theme.colors.gray.light};
    ${props => props.theme.xxxl`
        padding: 5rem clamp(5rem, 10vw, 10rem);
    `}
    ${props => props.theme.sm`
        padding: 1rem clamp(1rem, 3vw, 3rem);
    `}

   
`

const FooterDesc = styled.div`
    padding: 0 clamp(1rem, 1vw, 2rem);
    p { 
        margin: 1.5rem 0;
        max-width: 15rem;
    
    }
    ${props => props.theme.lg`
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 0;
        span {
            display: flex;
            align-items: center;
            p { 
                margin-left: 1rem;
                max-width: 25rem;
            }
            
        }
        .socialMedia {
            padding: 1rem clamp(1rem, 1vw, 2rem);
        }
    `}
    ${props => props.theme.md`
        margin-bottom: 1.5rem;
        align-items: flex-end;
        span {
            flex-flow: column;
            align-items: baseline;
            p {
                margin: 0;
            }
        }
        .socialMedia {
            // align-items: flex-end;
        }
        
    `}
    ${props => props.theme.sm`
        flex-flow: column;
        align-items: flex-start;        
    `}
   
    
`
const LogoContainer = styled(Link)`
    width: clamp(100px, 15vw, 100px);
    margin-bottom: 1rem;
    img {
        width: 100%;
        height: auto;
        max-width: 8rem;
        margin: 0 auto;
    }
`

const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: 30% 1fr;
    /* max-width: 80vw; */
    margin: 0 auto;
    ${props => props.theme.lg`
        grid-template-columns: 1fr;
    `}


`
const FooterLinksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    ${props => props.theme.xs`
        flex-flow: column;
    `}

`

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem clamp(1rem, 1vw, 2rem);
    /* width:clamp(20rem, 5vw, 40rem); */
    min-width: 10rem;
    &.socialMedia {
        padding: 0;
    }
    ${props => props.theme.lg`
        &.socialMedia {
            padding: 1rem clamp(1rem, 1vw, 2rem);
        }
    `}
    ${props => props.theme.sm`
        &.socialMedia {
            padding-left: 0 !important;
        }
        
    `}
    
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
    white-space: nowrap;
    &:hover {
        color: ${props => props.theme.colors.primary.main};
        transition: 0ms.3s ease-out;
    }
`
const Row = styled.div`
    display: flex;
    width: -webkit-fill-available;
    justify-content: space-between;
    align-items: center;
    padding: 1rem clamp(1rem, 1vw, 2rem);
    span {
        display: flex;
        align-items: center;
        svg {
            margin-right: 3px;
        }
    }
`
