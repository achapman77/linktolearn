import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

//components
import { Section, SectionHeader, Container } from '../layout/Section'
import ServiceCard from './ServiceCard'




const ServicesSection = () => {
    const data = [
    {
        title:"Mobile BioSkills Labs",
        icon:"xxx",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis neque aliquam possimus consequuntur voluptas rem quaerat in delectus. Commodi cupiditate perferendis fugit asperiores sunt dolorem optio nulla quibusdam totam doloribus.",
        link:"/"
    },
    {
        title:"AR/VR Immersive Instruction",
        icon:"xxx",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis neque aliquam possimus consequuntur voluptas rem quaerat in delectus. Commodi cupiditate perferendis fugit asperiores sunt dolorem optio nulla quibusdam totam doloribus.",
        link:"/"
    },
    {
        title:"Human Performance Metrics",
        icon:"xxx",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis neque aliquam possimus consequuntur voluptas rem quaerat in delectus. Commodi cupiditate perferendis fugit asperiores sunt dolorem optio nulla quibusdam totam doloribus.",
        link:"/"
    },
    {
        title:"Rapid Scenario Authoring",
        icon:"xxx",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis neque aliquam possimus consequuntur voluptas rem quaerat in delectus. Commodi cupiditate perferendis fugit asperiores sunt dolorem optio nulla quibusdam totam doloribus.",
        link:"/"
    }
]
    return (
        <StyledSection id="about">
            <Header>
                <h2>What We Do</h2>
                <p>Our mission is to provide a comprehensive immersive learning service & technology ecosystem that enhances the effectiveness of emergency medical training for both military and civilian teams.</p>
            </Header>
            <StyledContainer>
                {data.map( (v,i) => {
                    return (
                        <ServiceCard data={v}/>
                    )
                })}
            </StyledContainer>
        </StyledSection>
    )
}

export default ServicesSection

const StyledSection = styled(Section)`
    min-height: fit-content;
`
const Header = styled(SectionHeader)`
    p {
        max-width:50rem;
    }
`

const StyledContainer = styled(Container)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    justify-content: center;
    max-width: 85rem;
    padding: 0;
`