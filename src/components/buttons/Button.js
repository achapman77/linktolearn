import styled from "styled-components";
import { Link } from 'gatsby'

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? props => props => props.theme.colors.primary.main : props => props.theme.colors.secondary.main)};
    white-space: nowrap;
    padding: ${( {big} ) => (big ? '16px 40px' : '10px 32px')};
    color: white;
    font-size: ${( {big} ) => (big ? '20px' : '16px')};
    outline: none;
    border: none;
    min-width: 100px;
    max-width: fit-content;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${( {round} ) => (round ? '50px' : 'none')};
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        margin-right: 0.75rem;
    }

    &:hover {
        background: ${({ primary }) => (primary ? props => props.theme.colors.secondary.main : props => props.theme.colors.primary.main)};
        transform: translateY(-2px);
    }

`