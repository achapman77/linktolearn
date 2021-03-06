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

    return (
        <StyledSection id="services">
            <Header 
                // data-aos="fade-right"
                // data-aos-delay="150"
                // data-aos-duration="1000"
            >
                <h2>{sectionTitle}</h2>
                <p>{sectionSubTitle}</p>
            </Header>
            <StyledContainer>
                {products.map( (v,i) => {
                    return (
                        <ProductCard 
                            data={v} 
                            key={i}
                            index={i}
                        />
                    )
                })}
            </StyledContainer>
        </StyledSection>
    )
}

export default ServicesSection

const StyledSection = styled(Section)`
    min-height: fit-content;
    padding-top: 0rem;
    /* background: ${props => props.theme.colors.secondary.dark}; */
    ${props => props.theme.md`
        p{text: align-left;}
    `}
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
        // grid-template-columns: 1fr;
        // gap: 1rem;
        display: block;
    `}
`