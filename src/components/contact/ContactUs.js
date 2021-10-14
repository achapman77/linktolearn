import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

//components
import { Section, SectionHeader, Container } from '../layout/Section'
// import ContactSectionHeader from './ContactSectionHeader'

import loadable from "@loadable/component"
const ContactInfo = loadable( () => import("./ContactInfo"))
const ContactForm = loadable( () => import("./ContactForm"))

// Resources
// https://www.derekaspaulding.com/blog/simple-contact-form-with-gatsby-formik-and-netlify/
// https://codepen.io/dannibla/pen/amgRNR
// https://medium.com/@matt.readout/adding-css-animations-with-styled-components-6c191c23b6ba
// https://formik.org/docs/api/field


const ContactUs = () => {
    const data = useStaticQuery(graphql`
        query {
            content: markdownRemark(fileAbsolutePath: {regex: "/contact_info/"}) {
                id
                frontmatter {
                    contact_section_content {
                        header
                        sub_header
                        form_title
                        contact_info_title
                        header_image {
                            id
                            childImageSharp {
                                gatsbyImageData
                            } 
                        }
                    }
                }
            }
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
    const content = data.content.frontmatter.contact_section_content
    

    return (
        <StyledSection id="contact">
            <StaticImage
                layout="fullWidth"
                src="../../assets/images/contact-background.png"
                alt="Contact Background"
            />
            <div
                style={{
                    gridArea:"1/1",
                    position: "relative",
                    placeItems:"center",
                    display: "grid",
                }}
            >
                <StyledSectionHeader>
                    <h2>{content.header}</h2>
                    <p>{content.sub_header}</p>
                </StyledSectionHeader>
            <StyledContainer>
                <ContactInfo data={data}/>
                <ContactForm content={content}/>
            </StyledContainer>
            </div>
                {/* <ContactSectionHeader content={content}/> */}
                
        </StyledSection>
        
    )
}

export default ContactUs

const StyledSection = styled(Section)`
    padding: 0;
    display: grid;
    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
        filter: grayscale(1) brightness(0.3) contrast(1.5);
        grid-area: 1/1;
    }
`

// const StyledStaticImage = styled(StaticImage)`
    
// `
const StyledSectionHeader = styled(SectionHeader)`
    h2, p {color: white;}
`

const StyledContainer = styled(Container)`
    flex-flow: wrap-reverse;
    gap: 2rem;
    /* ${props => props.theme.xs`
        gap: 1rem;
    `} */
`





