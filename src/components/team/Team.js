import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

//animation
import Aos from 'aos'
import "aos/dist/aos.css"

//components
import { Section, SectionHeader, Container } from '../layout/Section'
import loadable from "@loadable/component"
const ProfileCard = loadable( () => import("./ProfileCard"))

const TeamSection = () => {
    const data = useStaticQuery(graphql`
        query {
            team_members: markdownRemark(fileAbsolutePath: {regex: "/team/"}) {
                id
                frontmatter {
                    section_title
                    section_subtitle
                    team_members {
                        description
                        first_name
                        last_name
                        position_title
                        position_subTitle
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
    
    const sectionTitle = data.team_members.frontmatter.section_title
    const sectionSubTitle = data.team_members.frontmatter.section_subtitle
    const teamMembers = data.team_members.frontmatter.team_members
    // console.info(teamMembers)

    useEffect( () => {
        Aos.init({})
    }, [])

    return (
        <StyledSection id="team">
            <SectionHeader>
                <h2>{sectionTitle}</h2>
                <p>{sectionSubTitle}</p>
            </SectionHeader>
            <StyledContainer>
                {
                    teamMembers.map( (v,i) => {
                        // console.info(v)
                        return (
                            <ProfileCard data={v} key={i} index={i} />
                        )
                    })
                }
            </StyledContainer>
        </StyledSection>
    )
}

export default TeamSection

const StyledSection = styled(Section)`
    background: ${props => props.theme.colors.gray.light};;
    padding-bottom: 10rem;
`

const StyledContainer = styled(Container)`
    display: grid;
    gap: clamp(1rem, 5vw, 2rem);
    margin: 0 clamp(1rem, 5vw, 2rem);
    align-items: baseline;
    grid-template-columns: repeat(4, 1fr);
    ${props => props.theme.lg`
        grid-template-columns: repeat(2, 1fr);
    `}
    ${props => props.theme.sm`
        grid-template-columns: 1fr;
        max-width: 25rem;
        gap: 3rem;
    `}
    
`