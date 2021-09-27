import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

//components
import { Section, SectionHeader, Container } from '../layout/Section'
import PartnerCard from './PartnerCard'

const PartnersSection = () => {
    const data = useStaticQuery(graphql`
        query {
            partners: mdx(fileAbsolutePath: {regex: "/partners/"}) {
                frontmatter {
                    section_title
                    section_subtitle
                    partners {
                        description
                        link
                        name
                        category
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
    const sectionTitle = data.partners.frontmatter.section_title
    const sectionSubTitle = data.partners.frontmatter.section_subtitle
    const partners = data.partners.frontmatter.partners
    // console.info({partners})
    const categoryArr = [...new Set(partners.map( ({category}) => category))].sort()
    // console.info({partners, categoryArr})
    return (
        <StyledSection id="partners">
            <SectionHeader>
                <h2>{sectionTitle}</h2>
                <p>{sectionSubTitle}</p>
            </SectionHeader>
            <StyledContainer>
                {categoryArr.map( (v,i) => {
                    return (
                        <CategoryWContainer key={i}>
                            <Label className={`color_${i}`}>
                                <div>{v.split("_")[1]}</div>
                            </Label>
                            <PartnerContainer>
                                {partners.map( (v2,i2) => {
                                    if (v2.category === v) {
                                        return (
                                                <PartnerCard key={i2} data={v2} />
                                        ) 
                                    }                                     
                                })}

                            </PartnerContainer>
                        </CategoryWContainer>
                    )
                })}
                
            </StyledContainer>
        </StyledSection>
    )
}

export default PartnersSection

const StyledSection = styled(Section)`
    
`
const StyledContainer = styled(Container)`
    display: block;
    max-width: 100rem;
    padding: 0rem calc((100vw - 2350px) / 2 );
    margin: 0 clamp(1rem, 3vw, 3rem);
`

const CategoryWContainer = styled.div`
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    
    /* xxs: '360px',
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1400px',
    xxl: '1550px',
    xxxl: '1850px', */
    ${props => props.theme.md`
        grid-template-columns: 1fr;
        margin: 0;
        margin-bottom: 2rem;
    `}

`
const Label = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    letter-spacing: 1px;
    div {
        text-align: center;
        word-spacing: 1000px;
    }
    ${props => props.theme.md`
        padding: 1rem;
        div {
            word-spacing: initial;
        }
    `}
    
    &.color_0 {
        background: ${props => props.theme.colors.gray.dark};
    }
    &.color_1 {
        background: ${props => props.theme.colors.secondary.dark};
    }
    &.color_2 {
        background: ${props => props.theme.colors.primary.main};
    }
`
const PartnerContainer = styled.ul`
    list-style: none;
    display: grid;
    /* gap: 1rem; */
`