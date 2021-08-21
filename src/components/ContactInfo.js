import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

//icons
import { AiOutlineMail, AiFillLinkedin, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai'
import { RiRoadMapLine, RiTwitterLine } from 'react-icons/ri'
import { Button } from './Button'

const ContactInfo = () => {

    const data = useStaticQuery(graphql`
        query {
            contact_info: markdownRemark(fileAbsolutePath: {regex: "/contact_info/"}) {
                id
                frontmatter {
                    business_name
                    business_address {
                        street
                        street2
                        city
                        state
                        zipcode
                        map_link
                    }
                    email
                    fax
                    phone
                }
            }
            social_media: markdownRemark(fileAbsolutePath: {regex: "/social_media/"}) {
                id
                frontmatter {
                    social_media {
                        select_social_media
                        profile_link
                    }
                }
            }
        }
    `)
    
    
    

    const contactInfo = data.contact_info.frontmatter
    const bizAddress = contactInfo.business_address

    
    const socialMedia = data.social_media.frontmatter.social_media

    console.info({data})
    return (
        <Container>
            <Title>Others Ways to Connect</Title>
            <List>
                {/* <Row>
                    <a href="mailto:info@companyxyz.com?subject=Company XYZ Website Inquiry">
                        <MailButton primary="true" round="true" as="button"><AiOutlineMail/>Email Us</MailButton>
                    </a>
                </Row> */}
                {contactInfo.phone &&
                    <Row>
                        <a href="" title="Click to Call">
                            <Label>Call:</Label>
                            <p>{contactInfo.phone}</p>
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
                        <a href={bizAddress.map_link} target="_blank">
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
                                        <li><a href={v.profile_link} target="_blank" title={v.select_social_media}>{icon}</a></li>
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
    width: clamp(300px, 20vw, 20vw);
    height: auto;
    padding: 2rem;
    background: #f2efef;
    border-radius: 10px;
    margin-right: 4rem;
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
    }
    p {
      font-size: clamp(0.8rem, 0.8125rem + 0.8333vw, 1.2rem);  
    }
`

const Label = styled.div`
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

const MailButton = styled(Button)`
    display:flex;
    align-items: center;
    svg {
        margin-right: 0.5rem;
        font-size: 1.25rem;
    }
`