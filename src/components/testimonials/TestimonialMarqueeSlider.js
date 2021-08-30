import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Marquee from "react-marquee-slider";
import {times} from "lodash/times";

const TestimonialMarqueeSlider = () => {
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
    console.info({testimonials:data})
    const testimonials = data.testimonials.frontmatter.testimonials
    return (
        
        <Wrapper>
            <div style={{ height: "500px", width: "-webkit-fill-available" }}>
                <Marquee 
                    velocity={25} 
                    minScale={0.7} 
                    resetAfterTries={200} 
                    scatterRandomly
                >
                    {times(testimonials.length, Number).map((id) => {
                        // console.info({id})
                        // console.info(testimonials[id])
                        return (
                            <Testimonial key={`testimonial-${id}`}>
                                <p>{testimonials[id].testimonial}</p>
                            </Testimonial>                            
                        )
                    })}
                </Marquee>
            </div>
        </Wrapper>
        
    )
}

export default TestimonialMarqueeSlider

const Wrapper = styled.div`
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
`


const Testimonial = styled.div`
    /* width: 100px;
    height: 100px; */
    /* margin: 0 5rem; */
    width: 500px;
    border: 1px solid red;
    text-align: center;
    padding: 1.5rem;
`

