import React, { CSSProperties } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

//components


//icons
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'


const TestimonialCarousel = () => {

    // const arrowStyles = {
    //     // position: 'absolute',
    //     // zIndex: 2,
    //     // top: 'calc(50% - 15px)',
    //     // width: 30,
    //     // height: 30,
    //     // cursor: 'pointer', 
    // }
    
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
                <div>
                    <Testimonial>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quos sit rerum optio voluptatibus assumenda quidem illo saepe minima consequuntur dolorem quam sequi, deserunt nulla, debitis vero voluptates, incidunt libero.</p>
                    </Testimonial>
                </div>
                <div>
                    <Testimonial>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quos sit rerum optio voluptatibus assumenda quidem illo saepe minima consequuntur dolorem quam sequi, deserunt nulla, debitis vero voluptates, incidunt libero.</p>
                    </Testimonial>
                </div>
                <div>
                    <Testimonial>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quos sit rerum optio voluptatibus assumenda quidem illo saepe minima consequuntur dolorem quam sequi, deserunt nulla, debitis vero voluptates, incidunt libero.</p>
                    </Testimonial>
                </div>
                <div>
                    <Testimonial>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quos sit rerum optio voluptatibus assumenda quidem illo saepe minima consequuntur dolorem quam sequi, deserunt nulla, debitis vero voluptates, incidunt libero.</p>
                    </Testimonial>
                </div>
                <div>
                    <Testimonial>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quos sit rerum optio voluptatibus assumenda quidem illo saepe minima consequuntur dolorem quam sequi, deserunt nulla, debitis vero voluptates, incidunt libero.</p>
                    </Testimonial>
                </div>
               
                
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
    max-width: 80vw;

    .slider-wrapper {
        margin: 0 3rem;
        width: -webkit-fill-available;
    }

    .slide {
        //controls width of text
        padding: 4rem 20vw;
    }

    .control-dots {
        .dot {
            background: ${props => props.theme.colors.primary.main};
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