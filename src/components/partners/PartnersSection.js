import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

//components
import { Section, SectionHeader, Container } from '../layout/Section'
import PartnerCard from './PartnerCard'

const PartnersSection = () => {
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
        <StyledSection>
            <SectionHeader>
                <h2>Our Research & Development Partners</h2>
            </SectionHeader>
            <Container>
                {data.map( (v,i) => {
                    return (
                        <PartnerCard key={i} data={v} />
                    )
                })}
            </Container>
        </StyledSection>
    )
}

export default PartnersSection

const StyledSection = styled(Section)`
    min-height: auto;
`