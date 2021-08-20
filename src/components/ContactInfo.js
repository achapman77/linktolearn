import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

//icons
import { AiOutlineMail, AiFillLinkedin, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai'
import { RiRoadMapLine, RiTwitterLine } from 'react-icons/ri'
import { Button } from './Button'

const ContactInfo = () => {

    const data1 = useStaticQuery(graphql`
        query {
            markdownRemark {
                frontmatter {
                    business_address {
                        street
                        street2
                        city
                        state
                        zipcode
                    }
                    business_name
                    email
                    fax
                    phone
                }
            }
        }
    `)

    const contactInfo = data1.markdownRemark.frontmatter

    return (
        <Container>
            <Title>Others Ways to Connect</Title>
            <List>
                {/* <Row>
                    <a href="mailto:info@companyxyz.com?subject=Company XYZ Website Inquiry">
                        <MailButton primary="true" round="true" as="button"><AiOutlineMail/>Email Us</MailButton>
                    </a>
                </Row> */}
                <Row>
                    <a href="" title="Click to Call">
                        <Label>Call:</Label>
                        <p>{contactInfo.phone}</p>
                    </a>
                </Row>
                <Row>
                    <Label>Fax:</Label>
                    <p>{contactInfo.fax}</p>
                </Row>
                <Row title="Click to View on Google Maps">
                    <a href="">
                        <Label>Address: <RiRoadMapLine/></Label>
                        <p>{contactInfo.business_address.street}, {contactInfo.business_address.street2}</p>
                        <p>{contactInfo.business_address.city}, {contactInfo.business_address.state} {contactInfo.business_address.zipcode}  </p>
                    </a>
                </Row>
                <Row>
                    <Label>Follow Us:</Label>
                    <SocialList>
                        <li><a href="" target="_blank" title="LinkedIn"><AiFillLinkedin/></a></li>
                        <li><a href="" target="_blank" title="Facebook"><AiFillFacebook/></a></li>
                        <li><a href="" target="_blank" title="Instagram"><AiFillInstagram/></a></li>
                        <li><a href="" target="_blank" title="Twitter"><AiFillTwitterSquare/></a></li>
                    </SocialList>
                </Row>
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