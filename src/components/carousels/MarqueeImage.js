import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import loadable from "@loadable/component"
import { SectionHeader } from '../layout/Section';
import {IoMdInformationCircle} from 'react-icons/io'
const Marquee = loadable( () => import("react-fast-marquee"))

//https://www.react-fast-marquee.com/documentation

const MarqueeImage = ({data, options, className}) => {
    const [viewWidth, setViewWidth] = useState(undefined)

    

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // console.info(window.innerWidth)
            setViewWidth(window.innerWidth)
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // console.info({viewWidth})
        // Remove event listener on cleanup
        // return () => window.removeEventListener("resize", handleResize);
    },[viewWidth])
    
    return (
        <Marquee
            pauseOnHover={true}
            speed={options?.speed ? options.speed : 30}
            direction={options?.direction ? options.direction : 'left'}
            gradientWidth={viewWidth < 400 ? 0 : viewWidth < 600 ? 50 : 150}
            className={className}
        >
            {
                data.map( (v,i) => {
                    let image = getImage(v.logo)
                    return (
                        <Card 
                            key={i}
                            href={v.link}
                            target="_blank"
                            rel="noreferrer"
                            title={`Visit the ${v.name} Website`}
                        >
                            <StyledGatsbyImage 
                                image={image} 
                                alt={v.name} 
                                backgroundColor={`transparent`}
                            />
                            <Info className="info" >
                                <IoMdInformationCircle/>
                            </Info>
                        </Card>
                    )
                })
            }
        </Marquee>
    )
}

export default MarqueeImage


const Card = styled.a`
    margin: 0 clamp(0.5rem, 3vw, 13rem);
    position: relative;
    padding: 1rem;
    .info {opacity:0;}
    &:hover {
        .info {opacity:1;}
        .gatsby-image-wrapper {
            filter: grayscale(0);
        }
    }
    /* xxs: '360px',
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px', */

    ${props => props.theme.sm`
        padding: 0.25rem;
        // margin: 0.25rem;
    `}
`
const StyledGatsbyImage = styled(GatsbyImage)`
    filter: grayscale(1);
    img { 
        max-height: 200px;
        ${props => props.theme.md`
            max-height: 100px;
        `}
        /* ${props => props.theme.sm`
            // max-height: 80px;
        `}
        ${props => props.theme.xs`
            // max-height: 50px;
        `} */
    }
`
const Info = styled.div`
    position: absolute;
    right:0px;
    top: 0px;
    font-size: 1.5rem;
    transition: 500ms opacity;
    color: ${props => props.theme.colors.secondary.dark};
    padding: 0.5rem;
    transition: 500ms;
    &:hover {
        color: ${props => props.theme.colors.primary.main};
        transform: scale(1.15)
    }
    
`