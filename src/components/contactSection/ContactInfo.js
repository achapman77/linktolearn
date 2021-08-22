import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

//icons
import { AiFillLinkedin, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai'
// import { RiRoadMapLine, RiTwitterLine } from 'react-icons/ri'
import { Button } from '../Button'

const ContactInfo = ({data}) => {
    const contactInfo = data.contact_info.frontmatter
    const bizAddress = contactInfo.business_address
    const socialMedia = data.social_media.frontmatter.social_media
    const content = data.content.frontmatter.contact_section_content

    return (
        <Container>
            <Title>{content.contact_info_title}</Title>
            <List>
                {/* <Row>
                    <a href="mailto:info@companyxyz.com?subject=Company XYZ Website Inquiry">
                        <MailButton primary="true" round="true" as="button"><AiOutlineMail/>Email Us</MailButton>
                    </a>
                </Row> */}
                {contactInfo.phone &&
                    <Row>
                        <a className="notMobileBtn"href={`tel:${contactInfo.phone}`} title="Click to Call" rel="noreferrer">
                            <Label>Call:</Label>
                            <p>{contactInfo.phone}</p>
                        </a>
                        <a className="mobileBtn" href={`tel:${contactInfo.phone}`} title={contactInfo.phone} rel="noreferrer">
                            <Button as="button" primary="true" round="true">Click to Call Us</Button>
                        </a>
                    </Row>
                }
                {contactInfo.fax && 
                    <Row>
                        <Label>Fax:</Label>
                        <p>{contactInfo.fax}</p>
                    </Row>
                }
                { bizAddress.street2 &&
                    <Row title="Click to View on Google Maps">
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
                        <SocialList>
                            {
                                socialMedia.map( (v,i) => {
                                    let icon
                                    if (v.select_social_media === 'LinkedIn') {
                                        icon = <AiFillLinkedin/>
                                    }
                                    else if (v.select_social_media === 'Facebook') {
                                        icon = <AiFillFacebook/>
                                    }
                                    else if (v.select_social_media === 'Instagram') {
                                        icon = <AiFillInstagram/>
                                    }
                                    else if (v.select_social_media === 'Twitter') {
                                        icon = <AiFillTwitterSquare/>
                                    }
                                    return(
                                        <li><a href={v.profile_link} target="_blank" rel="noreferrer" title={v.select_social_media}>{icon}</a></li>
                                    )
                                })
                            }
                        </SocialList>
                    </Row>
                }
                
            </List>
            
                
            
            
        </Container>
    )
}

export default ContactInfo

const Container = styled.div`
    align-self: end;
    margin-top: 4.5rem;
    width: clamp(500px, 20vw, 20vw);
    height: auto;
    padding: 2rem;
    background: #f2efef;
    border-radius: 10px;
    margin-right: 4rem;
    ${props => props.theme.lg`
        margin: 4rem 5rem;
        min-width: 70vw;
    `}
    ${props => props.theme.sm`
        margin: 4rem 1rem;
        min-width: 85vw;
    `}
`
const Title = styled.h3`
 margin-bottom: 1.25rem;
`
const List = styled.ul`
    list-style: none;
    margin-top: 1.5rem;
`


const Row = styled.li`
    font-size: 1.25rem;
    padding-bottom: 1.5rem;   
    color: ${props => props.theme.colors.gray.dark};
    a {
        text-decoration: none;
        color: ${props => props.theme.colors.gray.dark};
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

const SocialList = styled.div`
    display: flex;
    li {
        padding-right: 1rem;
        &:hover svg{
           color: ${props => props.theme.colors.primary.main}; 
        }
    }
    svg {
        font-size: 2rem;
    }

`

// const MailButton = styled(Button)`
//     display:flex;
//     align-items: center;
//     svg {
//         margin-right: 0.5rem;
//         font-size: 1.25rem;
//     }
// `