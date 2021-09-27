import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

//components
import { Section, SectionHeader, Container } from '../layout/Section'
import ProductCard from './ProductCard'




const ServicesSection = () => {
    const data = useStaticQuery(graphql`
        query {
            products: mdx(fileAbsolutePath: {regex: "/products/"}) {
                frontmatter {
                    section_title
                    section_subtitle
                    products {
                        description
                        title
                        subTitle
                        page_link
                        image {
                            childImageSharp {
                                gatsbyImageData
                                id
                            }
                        }
                    }
                }
            }
        }
    `)
    const sectionTitle = data.products.frontmatter.section_title
    const sectionSubTitle = data.products.frontmatter.section_subtitle
    const products = data.products.frontmatter.products
    // console.info({products})
    return (
        <StyledSection id="services">
            <Header>
                <h2>{sectionTitle}</h2>
                <p>{sectionSubTitle}</p>
            </Header>
            <StyledContainer>
                {products.map( (v,i) => {
                    return (
                        <ProductCard data={v} key={i}/>
                    )
                })}
            </StyledContainer>
        </StyledSection>
    )
}

export default ServicesSection

const StyledSection = styled(Section)`
    min-height: fit-content;
    /* background: ${props => props.theme.colors.secondary.dark}; */
`
const Header = styled(SectionHeader)`
    p {
        max-width:50rem;
    }
`

const StyledContainer = styled(Container)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(1rem, 3vw, 4rem);
    justify-content: center;
    max-width: 85rem;
    padding: 0;
    ${props => props.theme.md`
        grid-template-columns: 1fr;
        gap: 1rem;
    `}
`