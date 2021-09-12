import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

//components
import { Section, SectionHeader, Container } from '../layout/Section'
import ProfileCard from './ProfileCard'

const TeamSection = () => {
    const data = useStaticQuery(graphql`
        query {
            team_members: markdownRemark(fileAbsolutePath: {regex: "/team/"}) {
                id
                frontmatter {
                    team_members {
                        description
                        first_name
                        last_name
                        position_title
                        profile_url
                        headshot {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `)

    let teamMembers = data.team_members.frontmatter.team_members
    console.info(teamMembers)

    return (
        <Section id="team">
            <SectionHeader>
                <h2>Our Team</h2>
            </SectionHeader>
            <StyledContainer>
                {
                    teamMembers.map( (v,i) => {
                        // console.info(v)
                        return (
                            <ProfileCard data={v} key={i} />
                        )
                    })
                }
            </StyledContainer>
        </Section>
    )
}

export default TeamSection

const StyledContainer = styled(Container)`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    align-items: baseline;
`