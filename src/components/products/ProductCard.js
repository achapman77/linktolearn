import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {AiOutlineArrowRight} from 'react-icons/ai'

const ProductCard = ({data}) => {
    console.info({data})
    return (
        <Card>
            <Title>{data.title}</Title>
            <Description>{data.description}</Description>
            <StyledLink>Learn More <AiOutlineArrowRight/></StyledLink>
        
        </Card>
    )
}

export default ProductCard


const Card = styled.div`
    /* max-width: 40rem; */
    margin: 0 auto;
    /* border: 1px solid gray; */
    padding: 2rem;

`
const Title = styled.h3`
    /* text-align: center; */
    padding-bottom: 1rem;

`
const Description = styled.p`
    

`
const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0.25rem 1rem;
    margin-top: 1rem;
    border-radius: 50px;
    width: fit-content;
    border: 1px solid ${props => props.theme.colors.gray.dark};
    
    svg {
        margin-left: 0.5rem;
    }
    &:hover {
        background: ${props => props.theme.colors.gray.dark};
        color: ${props => props.theme.colors.primary.main};
        border: 1px solid ${props => props.theme.colors.primary.main};
    }

`