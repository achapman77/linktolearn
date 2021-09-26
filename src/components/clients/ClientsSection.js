import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

//components
import { Section, SectionHeader, Container } from '../layout/Section'
import MarqueeImage from '../carousels/MarqueeImage'

const ClientsSection = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            clients: mdx(fileAbsolutePath: {regex: "/clients/"}) {
                frontmatter {
                    section_title
                    section_subtitle
                    clients {
                        description
                        link
                        name
                        logo {
                            childImageSharp {
                                id
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `)
    const sectionTitle = data.clients.frontmatter.section_title
    const sectionSubTitle = data.clients.frontmatter.section_subtitle
    const clients = data.clients.frontmatter.clients
    // console.info({clients})
    return (
        <StyledSection id="clients">
            <SectionHeader>
                <h2>{sectionTitle}</h2>
                <p>{sectionSubTitle}</p>
            </SectionHeader>
            <StyledContainer>
                <MarqueeImage data={clients} options={{speed: 100}} className="clientMarquee" />
            </StyledContainer>
        </StyledSection>
    )
}

export default ClientsSection

const StyledSection = styled(Section)`
    padding-left: 0;
    padding-right: 0;
    min-height: auto;
`
const StyledContainer = styled(Container)`
    padding: 0;
`