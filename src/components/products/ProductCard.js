import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {AiOutlineArrowRight} from 'react-icons/ai'

//animation
import Aos from 'aos'
import "aos/dist/aos.css"

const ProductCard = ({data, index}) => {
    // console.info({data})
    useEffect( () => {
        Aos.init({})
    }, [])
    return (
        <Card
        data-aos={index === 0 || index === 2 ? 'fade-right' : 'fade-left'}
        data-aos-delay="150"
        data-aos-duration="1000"
        >
            <Title>{data.title}</Title>
            <Description>{data.description}</Description>
            <StyledLink
                to={data.page_link}
            >
                Learn More<AiOutlineArrowRight/>
            </StyledLink>
        
        </Card>
    )
}

export default ProductCard


const Card = styled.div`
    /* max-width: 40rem; */
    margin: 0 auto;
    /* border: 1px solid gray; */
    padding: clamp(1rem, 2vw, 2rem);
    /* height: -webkit-fill-available; */
    /* display: flex;
    flex-flow: column; */
    position: relative;
    ${props => props.theme.md`
        padding-bottom: 3rem;
    `}
    &:hover {
        a {
            border: 1px solid ${props => props.theme.colors.secondary.dark};
            color: ${props => props.theme.colors.secondary.dark}; 
        }
    }
`
const Title = styled.h3`
    /* text-align: center; */
    padding-bottom: 1rem;

`
const Description = styled.p`
    padding-bottom: 1rem;

`
const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0.25rem 1rem;
    /* margin-top: 1rem; */
    border-radius: 50px;
    width: fit-content;
    border: 1px solid ${props => props.theme.colors.secondary.dark};
    color: ${props => props.theme.colors.secondary.dark};
    text-decoration: none;
    position: absolute;
    bottom: 0;
    ${props => props.theme.md`
       position: relative;
    `}
    
    svg {
        margin-left: 0.5rem;
    }
    &:hover {
        background: ${props => props.theme.colors.secondary.dark};
        color: white;
        svg {
            color: white;
        }
        /* border: 1px solid ${props => props.theme.colors.primary.main}; */
    }

`