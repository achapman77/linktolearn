import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {IoMdInformationCircle} from 'react-icons/io'

const PartnerCard = ({data}) => {
    
    return (
        <Card>
            <Title>{data.name}</Title>
            <Description>{data.description}</Description>
            <Info
                href={data.link}
                target="_blank"
                rel="noreferrer"
                title={`Visit the ${data.name} Website`}
            >
                <IoMdInformationCircle/>
            </Info>
        </Card>
    )
}

export default PartnerCard

const Card = styled.li`
    text-decoration: none;
    color: ${props => props.theme.colors.gray.dark};
    padding: 1rem 0;
    border-top: 1px solid ${props => props.theme.colors.gray.light};
    position: relative;
    a {display: none;}
    &:hover {
        a {display: block;}
    }
    ${props => props.theme.md`
        border-top: 1px solid transparent;
        border-bottom: 1px solid ${props => props.theme.colors.gray.light};
        padding: 1rem;
    `}
`

const Title = styled.h3`
    padding-right: 1rem;
    ${props => props.theme.md`
        padding: 0rem;
        margin-bottom: 1rem;
    `}
`
const Description = styled.p`
    padding-right: 1rem;
    ${props => props.theme.md`
        padding: 0rem;
    `}

`
const Info = styled.a`
    position: absolute;
    top: 0px;
    right: 0px;
    color: ${props => props.theme.colors.secondary.dark};
    font-size: 1.5rem;
    transition: 500ms;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 0.5rem;
    &:hover {
        color: ${props => props.theme.colors.primary.main};
        transform: scale(1.15)
    }
`
