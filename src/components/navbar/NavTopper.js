import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
//components
import loadable from "@loadable/component"
const SocialMedia = loadable( () => import("../buttons/SocialMedia"))
const QuickConnectBtns = loadable( () => import("../buttons/QuickConnectBtns"))

const NavTopper = () => {
    const data = useStaticQuery(graphql`
        query  {
            mdx(fileAbsolutePath: {regex: "/page_top_messages/"}) {
                frontmatter {
                page_top_messages {
                    message
                }
                }
            }
        }
    `)  
    const messages = data.mdx.frontmatter.page_top_messages
    
    return (
        <Container>
            <QuickConnectBtns className='navTopper' />
            <MessageWrapper>
                <StyledCarousel 
                    autoPlay={true} 
                    // axis='vertical'
                    interval={5000}
                    transitionTime={2000}
                    infiniteLoop={true}
                    emulateTouch={false}
                    swipeable={false}
                    showStatus={false}
                    showThumbs={false}
                    showArrows={false}
                    showIndicators={false}
                >
                    {
                        messages.map( (v,i) => {
                            return (
                            <div key={i}>{v.message}</div>
                            )
                        })
                    }
                </StyledCarousel>
            </MessageWrapper>
            <SocialMedia variant="navTopper" animate={true} delay={0} />
        </Container>
    )
}

export default NavTopper

const Container = styled.div`
    display: flex;
    align-items: center;
    padding-right: clamp(1rem, 1vw, 2rem);;
    color: white;
    font-size: clamp(0.75rem, 1vw, 1rem);
    font-weight: bold;
    background: ${props => props.theme.colors.primary.main};
    height: fit-content;
    position: sticky;
    justify-content: space-between;
    display: grid;
    grid-template-columns: 25rem 1fr 25rem;
    ${props => props.theme.xxl`
        grid-template-columns: 22rem 1fr 22rem;
    `}
    ${props => props.theme.xl`
        grid-template-columns: 20rem 1fr 20rem;
    `}
    ${props => props.theme.lg`
        grid-template-columns: 19rem 1fr 10rem;
    `}
    ${props => props.theme.sm`
        display:none;
    `}
    a {
        text-decoration: none;
    }
`

const gradientColor1 = props => props.theme.colors.primary.main.replace(/[^\d,]/g, '')
const MessageWrapper = styled.div`
    display: flex;
    align-items: center;
    /* gap: clamp(1rem, 1vw, 2rem); */
    height: -webkit-fill-available;
    /* background: red; */
    position: relative;
    &:before {
       content:'';
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background: linear-gradient(90deg, rgba(${gradientColor1}, 1) 0%, rgba(${gradientColor1},0) 35%, rgba(${gradientColor1},0) 65%, rgba(${gradientColor1},1) 100%);
        z-index: 10;
        ${props => props.theme.md`
            background: linear-gradient(90deg, rgba(${gradientColor1}, 1) 0%, rgba(${gradientColor1},0) 10%, rgba(${gradientColor1},0) 90%, rgba(${gradientColor1},1) 100%);;
        `}
    }
`

const StyledCarousel = styled(Carousel)`
    /* max-width: 20vw; */
    width: -webkit-fill-available;
    
    height: -webkit-fill-available;
    display: flex;
    align-items: center;
    .slider-wrapper {
        /* margin: 0 3rem; */
        width: -webkit-fill-available; 
    }

    .slide {
        //controls width of text
        /* padding: 0rem calc((100vw - 500px) / 2 ); */
        letter-spacing: 3px;
        /* p {
            padding: 1rem;
            letter-spacing: 10px;
        } */
    }    
`


