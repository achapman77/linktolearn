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
    const clients = data.clients.frontmatter.clients
    console.info({clients})
    return (
        <StyledSection>
            <SectionHeader>
                <h2>Our Clients</h2>
                <p>It has been an honor to provide training solutions for hundreds of members across DoD and Civilian emergency medical teams.  We are humbled to see interest in Link to Learn's solutions spread so rapidly and appreciate all their collaboritive support and ideas. </p>
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