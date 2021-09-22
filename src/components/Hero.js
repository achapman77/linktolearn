import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { Parallax, Background } from 'react-parallax'
import { AiOutlineArrowDown } from 'react-icons/ai'
import BackgroundImg from '../assets/images/hero-background.jpg'
import { Button } from './buttons/Button'
import Video from '../assets/videos/travel.mp4'
import Aos from 'aos'
import "aos/dist/aos.css"


const Hero = () => {
    useEffect( () => {
        Aos.init({})
    }, [])

    let viewWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    let yOffset = -0.12
    const [parallaxY, setParallaxY] = useState(viewWidth * yOffset)
    
    useEffect(() => {
        if (typeof window !== `undefined`) {
            
            setParallaxY(viewWidth * yOffset)
            window.addEventListener('resize', () => {
                viewWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
                setParallaxY(viewWidth * yOffset)
                // console.info({viewWidth})
            });
            

        }
        
    }, [])
    // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) 
    // console.info({viewWidth, parallaxY})
    return (
        <HeroContainer id="hero">
            <div className="parallax-wrapper">
                <Parallax className="hero parallax-content" strength={parallaxY}>
                    <Background>
                        <img src={BackgroundImg} alt="Background" />
                    </Background>
                    <div className="hero__title">
                        <h1>Company Name</h1>
                        <p>Something Else Awesome</p>
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
    }
    }

    .react-parallax-content {
        height: -webkit-fill-available;
    }

    .hero__title {
        position: absolute;
        left: 10vw;
        top: 33%;
        padding: 1rem;
        height: 25vh;
        width: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        gap: 1rem;
        backdrop-filter: blur(4px);
        background-color: rbga(0,0,0,0);
        background: rgba(0,0,0,0.5);
        border-radius: 4px;
        z-index: 2;
        text-align: center;
        transform: translateZ(-2px) scale(1.2);
        h1, p, a { color: white;}
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

    ${props => props.theme.xxl`
        // .react-parallax-background-children {transform: translate3d(-50%, -174px, 0px) !important;}
    `}
    //xl: '1400px',
    ${props => props.theme.xl`
        // .react-parallax-background-children {transform: translate3d(-50%, -160px, 0px) !important;}
        .parallax-content { height: 77vh;}
    `}
    //lg: '1200px',
    ${props => props.theme.lg`
        // .react-parallax-background-children {transform: translate3d(-50%, -125px, 0px) !important;}
        .parallax-content { height: 65vh;}
        
        .hero__title {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 80vw;
        }  
    `}
    //md: '992px',
    ${props => props.theme.md`
        // .react-parallax-background-children {transform: translate3d(-50%, -75px, 0px) !important;}  
        .parallax-content { height: 55vh;}
        
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
        }
        .hero__title {
            padding: 1rem;
            left: 50%;
            top: 55%;
            transform: translate(-50%, -55%);
            width: 80vw;
            height: 35vh;
        }
        
    `}
    //xs: '480px',
    ${props => props.theme.xs`
        margin-bottom: -2rem;
        .parallax-content { height: 85vh;}
        img {
            height: 100vh !important;
            width: auto !important;
        }
        .hero__title {
            padding: 1rem;
            left: 50%;
            top: 100%;
            transform: translate(-50%, -100%);
            width: 100vw;
            height: 250px;
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
        }

        .hero__title {
            padding: 1rem;
            left: 50%;
            top: 100%;
            transform: translate(-50%, -90%);
            width: 100vw;
            height: 150px;
        }
        
    `}

`
