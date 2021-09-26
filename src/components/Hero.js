import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components'
import { Parallax, Background } from 'react-parallax'
import { AiOutlineArrowDown } from 'react-icons/ai'
import BackgroundImg from '../assets/images/hero-background.jpg'
import Aos from 'aos'
import "aos/dist/aos.css"



const Hero = () => {
    useEffect( () => {
        Aos.init({})
    }, [])

    const [parallaxY, setParallaxY] = useState(undefined)

    useEffect(() => {
        let yOffset = -0.12
        // Handler to call on window resize
        function handleResize() {
            setParallaxY(window.innerWidth * yOffset)
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    },[])
    
    const heroBtns = [
        {label:'Mobile BioSkills Labs', link:'/services/mobile_bioskills_labs'},
        {label:'AR/VR Immersive Instruction', link:'/services/realx_mixed_reality_training'},
        {label:'Human Performance Metrics', link:'/services/beast_human_performance_metrics'},
        {label:'Dynamic Scenario Authoring', link:'/services/dynamic_scenario_authoring_system'},
    ]
    
    return (
        <HeroContainer id="hero">
            <div className="parallax-wrapper">
                <Parallax className="hero parallax-content" strength={parallaxY}>
                    <Background>
                        <img src={BackgroundImg} alt="Background" />
                    </Background>
                    <div className="hero__title">
                        <p>Welcome to Link to Learn</p>
                        <h1>We engineer solutions for more effective emergency medical training.</h1>
                        <HeroNav>
                                {
                                    heroBtns.map( (v,i) => {
                                        return (
                                            <Link key={i} to={v.link}>{v.label}</Link>    
                                        )
                                    })
                                }
                        </HeroNav>
                    </div>
                </Parallax>
                <div className="scroll-icon-container">
                   <AiOutlineArrowDown/>
                </div>
            </div>
        </HeroContainer>
    )
}

export default Hero



const HeroContainer = styled.div`
    margin-top: -80px;

    .parallax-wrapper {
        position: relative;
    }

    .parallax-content {
        position: relative;
        width: 100%;
        height: 85vh;
    }
    /* .parallax-content::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 100%;
        transform-origin: 0 100%;
        transform: translateZ(8px);
        pointer-events: none;
        background-image: linear-gradient(
        to bottom,
        hsla(0, 0%, 0%, 0) 0%,
        hsla(0, 0%, 0%, 0.013) 8%,
        hsla(0, 0%, 0%, 0.049) 14.8%,
        hsla(0, 0%, 0%, 0.104) 20.8%,
        hsla(0, 0%, 0%, 0.175) 26%,
        hsla(0, 0%, 0%, 0.259) 30.8%,
        hsla(0, 0%, 0%, 0.352) 35.3%,
        hsla(0, 0%, 0%, 0.45) 39.8%,
        hsla(0, 0%, 0%, 0.55) 44.5%,
        hsla(0, 0%, 0%, 0.648) 49.5%,
        hsla(0, 0%, 0%, 0.741) 55.2%,
        hsla(0, 0%, 0%, 0.825) 61.7%,
        hsla(0, 0%, 0%, 0.896) 69.2%,
        hsla(0, 0%, 0%, 0.951) 77.9%,
        hsla(0, 0%, 0%, 0.987) 88.1%,
        hsl(0, 0%, 0%) 100%
        );
        z-index: 3;
    } */

    .react-parallax-background-children {
        width: 100%;
        height: auto;  
        img {
            width: 100%;
            height: auto;
        }
        &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 100%;
        transform-origin: 0 100%;
        transform: translateZ(8px);
        pointer-events: none;
        /* background-image: linear-gradient(
        to bottom,
        hsla(0, 0%, 0%, 0) 0%,
        hsla(0, 0%, 0%, 0.013) 8%,
        hsla(0, 0%, 0%, 0.049) 14.8%,
        hsla(0, 0%, 0%, 0.104) 20.8%,
        hsla(0, 0%, 0%, 0.175) 26%,
        hsla(0, 0%, 0%, 0.259) 30.8%,
        hsla(0, 0%, 0%, 0.352) 35.3%,
        hsla(0, 0%, 0%, 0.45) 39.8%,
        hsla(0, 0%, 0%, 0.55) 44.5%,
        hsla(0, 0%, 0%, 0.648) 49.5%,
        hsla(0, 0%, 0%, 0.741) 55.2%,
        hsla(0, 0%, 0%, 0.825) 61.7%,
        hsla(0, 0%, 0%, 0.896) 69.2%,
        hsla(0, 0%, 0%, 0.951) 77.9%,
        hsla(0, 0%, 0%, 0.987) 88.1%,
        hsl(0, 0%, 0%) 100%
        ); */
        z-index: 3;
    }
    }

    .react-parallax-content {
        height: -webkit-fill-available;
    }

    .hero__title {
        position: absolute;
        left: 10vw;
        top: 33%;
        padding: 3rem;
        height: fit-content;
        max-width: clamp(30rem, 60vw, 55rem);
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
        transform: translateZ(-2px) scale(1.2);
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
        // .react-parallax-background-children {transform: translate3d(-50%, -174px, 0px) !important;}
        margin-bottom: -1rem;
        .parallax-content { height: 80vh;}
        img {
            height: 100vh !important;
            // width: auto !important;
        }
    `}

    //xxl: '1550px',
    ${props => props.theme.xxl`
        // .react-parallax-background-children {transform: translate3d(-50%, -174px, 0px) !important;}
        margin-bottom: -1rem;
        .parallax-content { height: 80vh;}
        img {
            height: 100vh !important;
            width: auto !important;
        }
    `}
    //xl: '1400px',
    ${props => props.theme.xl`
        // .react-parallax-background-children {transform: translate3d(-50%, -160px, 0px) !important;}
        .parallax-content { height: 77vh;}
    `}
    //lg: '1200px',
    ${props => props.theme.lg`
        // .react-parallax-background-children {transform: translate3d(-50%, -125px, 0px) !important;}
        // .parallax-content { height: 65vh;}
        margin-bottom: -1rem;
        .parallax-content { height: 80vh;}
        img {
            height: 100vh !important;
            width: auto !important;
        }
        
        .hero__title {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 80vw;
            max-width: fit-content;
        }  
    `}
    //md: '992px',
    ${props => props.theme.md`
        // .react-parallax-background-children {transform: translate3d(-50%, -75px, 0px) !important;}  
        // .parallax-content { height: 55vh;}
        margin-bottom: -1rem;
        .parallax-content { height: 80vh;}
        img {
            height: 100vh !important;
            width: auto !important;
        }
        .hero__title { width: 90vw;}
        
    `}
    //sm: '768px',
    ${props => props.theme.sm`
        // .react-parallax-background-children {transform: translate3d(-50%, -125px, 0px) !important;}
        // .parallax-content { height: 33vh;}
        margin-bottom: -1rem;
        .parallax-content { height: 85vh;}
        img {
            height: 100vh !important;
            width: auto !important;
            transform: translateX(-200px);
        }
        .hero__title {
            padding: 1rem;
            left: 50%;
            top: 55%;
            transform: translate(-50%, -55%);
            // width: 80vw;
            // height: 35vh;
            nav {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                margin: 1rem auto;
                // margin-top: 1rem;
                // width: -webkit-fill-available;
                a { justify-content: center;}
            }
        }
        
    `}
    //xs: '480px',
    ${props => props.theme.xs`
        margin-bottom: -2rem;
        .parallax-content { height: 85vh;}
        img {
            height: 100vh !important;
            width: auto !important;
            transform: translateX(-270px);
        }
        .hero__title {
            padding: 1rem;
            left: 50%;
            top: 100%;
            transform: translate(-50%, -100%);
            width: 100vw;
            height: fit-content;
            border-radius: 0;
        }
        .scroll-icon-container {
            font-size: 1.5rem;
            width: 2.5rem;
            height: 2.5rem;
            bottom: -1.25rem;

        }
        
    `}
    //xxs: '360px',
    ${props => props.theme.xxs`
        margin-bottom: -2rem;
        .parallax-content { 
            height: 85vh;
        }
        img {
            height: 100vh !important;
            width: auto !important;
            transform: translateX(-110px);
        }

        .hero__title {
            padding: 1rem;
            left: 50%;
            top: 93%;
            transform: translate(-50%, -90%);
            width: 100vw;
           height: fit-content;
           a {
               font-size: 0.85rem;
                padding: 5px;
                height: 75px;
           }

        }
        
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
        &:hover {
            background: ${props => props.theme.colors.gray.dark};
            color: ${props => props.theme.colors.primary.main};
            border: 1px solid ${props => props.theme.colors.primary.main};
        }
    }
`
