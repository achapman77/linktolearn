import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

//icons
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'


const TestimonialCarousel = () => {
    const data = useStaticQuery(graphql`
        query {
            testimonials: markdownRemark(fileAbsolutePath: {regex: "/testimonials/"}) {
                id
                frontmatter {
                    testimonials {
                        testimonial
                    }
                }
            }
            
        }
    `)
    // console.info({testimonials:data})
    const testimonials = data.testimonials.frontmatter.testimonials
    return (
        <Wrapper>
            <StyledCarousel 
                autoPlay={true} 
                interval={3000}
                transitionTime={1000}
                infiniteLoop={true}
                emulateTouch={true}
                swipeable={true}
                showStatus={false}
                showThumbs={false}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <StyledButton type="button" onClick={onClickHandler} title={label} style={{ left: 10}} >
                            <BsArrowLeft/>
                        </StyledButton>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <StyledButton type="button" onClick={onClickHandler} title={label} style={{ right: 10}} >
                            <BsArrowRight/>
                        </StyledButton>
                    )
                }
            >
                {
                    testimonials.map( (v,i) => {
                        return (
                            <div key={i}>
                                <Testimonial >
                                    <p>{v.testimonial}</p>
                                </Testimonial>
                            </div>
                        )
                    })
                }
            </StyledCarousel>
        </Wrapper>
        
    )
}

export default TestimonialCarousel

const Wrapper = styled.div`
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledCarousel = styled(Carousel)`
    max-width: 100vw;

    .slider-wrapper {
        margin: 0 3rem;
        width: -webkit-fill-available;
    }

    .slide {
        //controls width of text
        padding: 4rem calc((100vw - 750px) / 2 );
        p {
            padding: 1rem;
        }
    }

    .control-dots {
        display: flex;
        justify-content: center;
        align-items: center;
        .dot {
            background: ${props => props.theme.colors.primary.main};
            padding: 0.5rem;
            &.selected {
                background: transparent;
                border: 2px solid ${props => props.theme.colors.primary.main};
                /* transform: scale(1.5); */
                height: 12px;
                width: 12px;
                box-shadow: none;
            }
        }

    }
    
`
const Testimonial = styled.div`
    
`

const StyledButton = styled.button`
    position: absolute;
    z-index: 2;
    top: calc(50% - 15px);
    cursor: pointer;
    height: 30px;
    width: 30px;
    background: transparent;
    border: none;
    font-size: 2.25rem;
    color: ${props => props.theme.colors.gray.light};
    opacity: 0.25;
    &:hover {
        color: ${props => props.theme.colors.primary.main};
        opacity: 1;
    }
    
`