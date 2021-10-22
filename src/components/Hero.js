import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby';
// import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
// import { Parallax, Background } from 'react-parallax'
import { AiOutlineArrowDown } from 'react-icons/ai'
import BackgroundImg from '../assets/images/hero-background.png'
import Aos from 'aos'
import "aos/dist/aos.css"
import LazyHero from 'react-lazy-hero';



const Hero = () => {
    const data = useStaticQuery(graphql`
        query {
            hero: mdx(fileAbsolutePath: {regex: "/hero/"}) {
                frontmatter {
                    main_title
                    sub_title
                }
            }
        }
    `)
    const title = data.hero.frontmatter.main_title
    const subTitle = data.hero.frontmatter.sub_title
    useEffect( () => {
        Aos.init({})
    }, [])

    const [parallaxY, setParallaxY] = useState(-307)

    useEffect(() => {
        let yOffset = -0.19
        // Handler to call on window resize
        function handleResize() {
            // console.info('handleResize=>')
            // console.info(window.innerWidth)
            // console.info(window.innerHeight)
            setParallaxY(window.innerHeight * yOffset)
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // console.info({parallaxY})
        // Remove event listener on cleanup
        // return () => window.removeEventListener("resize", handleResize);
    },[parallaxY])
    
    const heroBtns = [
        {label:'Mobile BioSkills Labs', link:'/services/mobile_bioskills_labs'},
        {label:'Mixed Reality Instruction', link:'/services/realx_mixed_reality_training'},
        {label:'Human Performance Metrics', link:'/services/beast_human_performance_metrics'},
        {label:'Dynamic Scenario Authoring', link:'/services/dynamic_scenario_authoring_system'},
    ]
    // console.info({setY:parallaxY})
    return (
        <HeroContainer id="hero">
            <LazyHero
                imageSrc={BackgroundImg}
                opacity={0}
                minHeight='85vh'
                isFixed={false}
                parallaxOffset={100}
                className='hero'
            >
                <div className="hero__title">
                    <p>{subTitle}</p>
                    <h1>{title}</h1>
                    <HeroNav>
                            {
                                heroBtns.map( (v,i) => {
                                    return (
                                        <Link key={i} to={v.link}
                                            // data-aos="flip-left"
                                            // data-aos-delay="150"
                                            // data-aos-duration="1000"
                                            // data-aos-easing="ease-out-cubic"
                                            // data-aos-anchor-placement="top-top"
                                        >
                                            {v.label}
                                        </Link>    
                                    )
                                })
                            }
                    </HeroNav>
                </div>
            </LazyHero>
            <div className="scroll-icon-container">
                <AiOutlineArrowDown/>
            </div>
        </HeroContainer>
    )
}

export default Hero



const HeroContainer = styled.div`
    margin-top: -80px;
    position: relative;
    .hero{
        div:first-child {
            background-size: cover ;
        }
    }
    .hero__title {
        position: absolute;
        bottom: 10rem;
        left: 10rem;
        /* left: 5vw; */
        /* top: 39vh; */
        padding: 3rem;
        height: fit-content;
        width: clamp(45rem, 50vw, 55rem);
        display: flex;
        justify-content: flex-start;
        align-items: baseline;
        flex-flow: column;
        gap: 1rem;
        backdrop-filter: blur(4px);
        background-color: rbga(0,0,0,0);
        background: rgba(0,0,0,0.65);
        border-radius: 4px;
        z-index: 2;
        text-align: center;
        /* transform: translateZ(-2px) scale(1.2); */
        h1, p, a { color: white;}
        h1 {
            text-align: left;
            font-size: clamp(1.2rem,2vw,3rem);
        }
        p {
        font-size: calc(0.6rem + 0.75vmin);
        }
    }
    .scroll-icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        overflow: hidden;
        bottom: -2rem;
        right: 0;
        left: 0;
        margin: 0 auto;
        border-radius: 0.15rem;
        background-color: inherit;
        width: 4rem;
        height: 4rem;
        z-index: 10;
        background: white;
        font-size: 2rem;
    }
    
    //xxxl: '1850px',
    ${props => props.theme.xxxl`
        .hero__title {
            bottom: 5rem;
            left: 5rem;
        }
    `}

    //xxl: '1550px',
    ${props => props.theme.xxl`

    `}
    //xl: '1400px',
    ${props => props.theme.xl`

    `}
    //lg: '1200px',
    ${props => props.theme.lg`
        
    `}
    //md: '992px',
    ${props => props.theme.md`
        .hero__title {
            top: 75%;
            left: 50%;
            transform: translate(-50%, -75%);
        }
        
    `}
    //sm: '768px',
    ${props => props.theme.sm`
        .hero__title {
            top: 100%;
            transform: translate(-50%, -100%);
            width: 100vw;
            border-radius: 0;
            padding: 2rem;
            padding-bottom: 3rem;
            h1 {
                max-width: 30rem;
            }
        }
        .scroll-icon-container {
            width: 2rem;
            height: 2rem;
            font-size: 1.25rem;
            bottom: -1rem;
        }
        
    `}
    //xs: '480px',
    ${props => props.theme.xs`
        .hero__title {
            padding: 2rem 1rem 3rem 1rem;
            
        }
        // p, h1 {
        //     width: -webkit-fill-available;
        //     max-width: -webkit-fill-available;
        //     text-align: center;
        // }
        // nav {
        //     margin: 0 auto;
        // }
        
    `}
    //xxs: '360px',
    ${props => props.theme.xxs`
        
        
    `}

`

const HeroNav = styled.nav`
    list-style: none;
    display: flex;
    /* grid-template-columns: repeat(4, 1fr); */
    gap: 1rem;
    margin-top: 2rem;

    a {
        text-decoration:none;
        border: 1px solid white;
        display: flex;
        align-items: center;
        padding: 0.85rem;
        letter-spacing: 1px;
        background: rgba(0,0,0,0.35);
        min-height: 5rem;
        &:hover {
            background: ${props => props.theme.colors.gray.dark};
            color: ${props => props.theme.colors.primary.main};
            border: 1px solid ${props => props.theme.colors.primary.main};
        }
    }
    //sm: '768px',
    ${props => props.theme.sm`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    `}
    
    ${props => props.theme.xs`
       
        a { 
            font-size: 0.75em;
        }
    `}

    //xs: 'px',
    ${props => props.theme.xxs`
        grid-template-columns: 1fr;
        width: -webkit-fill-available;
        a {
            min-height: fit-content;
            justify-content: center; 
            font-size: 0.75em;
        }
    `}
`
