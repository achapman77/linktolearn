import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import loadable from "@loadable/component"
import { SectionHeader } from '../layout/Section';

const Marquee = loadable( () => import("react-fast-marquee"))

//https://www.react-fast-marquee.com/documentation

const TestimonialMarqueeFast = () => {
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

    const [viewWidth, setViewWidth] = useState(2000)
    useEffect(() => {
        if (typeof window !== `undefined`) {
            window.addEventListener('resize', () => {
                setViewWidth(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0))
            });
        }
    }, [])
    // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) 
    // console.info({viewWidth})
    return (
        <>
            <SectionHeader>
                <h2>What People Are Saying</h2>
            </SectionHeader>
            <Container>
                <Marquee
                    pauseOnHover={true}
                    speed={30}
                    direction='left'
                    gradientWidth={viewWidth < 400 ? 0 : viewWidth < 600 ? 75 : 200}
                >
                    {
                        testimonials.map( (v,i) => {
                            return (
                                <Testimonial key={i}>
                                    <p>{v.testimonial}</p>
                                </Testimonial>
                            )
                        })
                    }
                </Marquee>
            </Container>
        </>
        
    )
}

export default TestimonialMarqueeFast

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0rem 0 5rem 0;
    
`


const Testimonial = styled.div`
    margin: clamp(1rem, 5vw, 3rem);;
    width: clamp(250px, 20vw, 500px);
    /* text-align: center; */
    padding: 2rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    .overlay {
        --gradient-width: 20px !important;
    }
`

