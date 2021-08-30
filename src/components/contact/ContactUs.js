import React, {Suspense, lazy} from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

//components
import { Section, Container } from '../layout/Section'
// import ContactSectionHeader from './ContactSectionHeader'
// import ContactInfo from './ContactInfo'
// import ContactForm from './ContactForm'
const ContactSectionHeader = lazy(()=>import('./ContactSectionHeader'))
const ContactInfo = lazy(()=>import('./ContactInfo'))
const ContactForm = lazy(()=>import('./ContactForm'))



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
            <Suspense fallback={<div>Loading...</div>}>
                <ContactSectionHeader content={content}/>
            </Suspense> 
            <StyledContainer>
                <Suspense fallback={<div>Loading...</div>}>
                    <ContactInfo data={data}/>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <ContactForm content={content}/>
                </Suspense>
                
            </StyledContainer>
        </StyledSection>
        
    )
}

export default ContactUs

const StyledSection = styled(Section)`
    padding: 0;
`
const StyledContainer = styled(Container)`
    flex-flow: wrap-reverse;
    gap: 2rem;
`





