import React from 'react'
import styled from 'styled-components'

// //animation
// import Aos from 'aos'
// import "aos/dist/aos.css"

//components'
import {AiOutlinePhone } from 'react-icons/ai'
import { Button } from '../buttons/Button'
import loadable from "@loadable/component"
const SocialMedia = loadable( () => import("../buttons/SocialMedia"))

const ContactInfo = ({data}) => {
    const contactInfo = data.contact_info.frontmatter
    const bizAddress = contactInfo.business_address
    const socialMedia = data.social_media.frontmatter.social_media
    const content = data.content.frontmatter.contact_section_content
    // useEffect( () => {
    //     Aos.init({disable: 'mobile'})
    // }, [])
    return (
        <Container
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="1000"
        >
            <Title>{content.contact_info_title}</Title>
            <List>
                {/* <Row>
                    <a href="mailto:info@companyxyz.com?subject=Company XYZ Website Inquiry">
                        <MailButton primary="true" round="true" as="button"><AiOutlineMail/>Email Us</MailButton>
                    </a>
                </Row> */}
                {contactInfo.phone &&
                    <Row
                        // data-aos="zoom-in-right"
                        // data-aos-delay="250"
                        // data-aos-duration="1000"
                    >
                        <a className="notMobileBtn"href={`tel:${contactInfo.phone}`} title="Click to Call" rel="noreferrer">
                            <Label>Call:</Label>
                            <p>{contactInfo.phone}</p>
                        </a>
                        <a className="mobileBtn" href={`tel:${contactInfo.phone}`} title={contactInfo.phone} rel="noreferrer">
                            <Button as="button" primary="" round="true"><AiOutlinePhone/>Click to Call</Button>
                        </a>
                    </Row>
                }
                {contactInfo.fax && 
                    <Row
                        // data-aos="zoom-in-right"
                        // data-aos-delay="350"
                        // data-aos-duration="1000"
                    >
                        <Label>Fax:</Label>
                        <p>{contactInfo.fax}</p>
                    </Row>
                }
                { bizAddress.street &&
                    <Row 
                        title="Click to View on Google Maps"
                        // data-aos="zoom-in-right"
                        // data-aos-delay="450"
                        // data-aos-duration="1000"
                    >
                        <a href={bizAddress.map_link} target="_blank" rel="noreferrer">
                            <Label>Address:</Label>
                            <p>{bizAddress.street}, {bizAddress.street2}</p>
                            <p>{bizAddress.city}, {bizAddress.state} {bizAddress.zipcode}</p>
                        </a>
                    </Row>
                }
                
                {socialMedia.length && 
                    <Row>
                        <Label>Follow Us:</Label>
                        <SocialMedia 
                            variant="contactInfo" 
                            // animate={true} 
                            // delay={450}
                        />
                    </Row>
                }
                
            </List>
            
                
            
            
        </Container>
    )
}

export default ContactInfo

const Container = styled.div`
    align-self: flex-end;
    margin-top: 0;
    /* width: clamp(500px, 20vw, 20vw); */
    height: auto;
    padding: 2rem;
    border-radius: 10px;
    /* margin: 0 2rem; */
    /* box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px; */
    /* width: fit-content; */
    backdrop-filter: blur(10px);
    border: 1px solid white;
    ${props => props.theme.lg`
        min-width: 70vw;
        margin-bottom: 2rem;
    `}
    ${props => props.theme.sm`
        margin: 1rem 1rem;
        min-width: 85vw;
        width: clamp(250px, 20vw, 20vw);
    `}
    ${props => props.theme.xs`
        margin:0;
        margin-bottom: 1rem;
        padding: 1rem;
        min-width: 100vw;
        width: 100vw;
        border: none;
        box-shadow: none;
    `}
`
const Title = styled.h3`
    margin-bottom: 1.25rem;
    font-size: clamp(1rem, 2vw, 2.25rem);
    color:white;
`
const List = styled.ul`
    list-style: none;
    margin-top: 1.5rem;
`


const Row = styled.li`
    font-size: 1.25rem;
    padding-bottom: 1.5rem;   
    /* color: ${props => props.theme.colors.gray.dark}; */
    color: white;
    a {
        text-decoration: none;
        /* color: ${props => props.theme.colors.gray.dark}; */
        color: white;
        &:hover p {
            color: ${props => props.theme.colors.primary.main};
        }
        &.notMobileBtn {
            display: block;
            ${props => props.theme.xs`
                display:none;
            `}
        }
        &.mobileBtn {
            display:none;
            svg {
                font-size: 1.5rem;
            }
            ${props => props.theme.xs`
                display:block;
            `}
        }
    }
    p {
      font-size: clamp(0.8rem, 0.8125rem + 0.8333vw, 1.2rem);  
    }
`

const Label = styled.p`
    font-weight: bold;
    margin-bottom: 0.25rem;
`

