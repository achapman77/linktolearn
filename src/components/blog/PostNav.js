import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineSearch } from 'react-icons/ai'

const PostNav = ({previous, next}) => {
    return (
        <Nav>
            <li key="back">
                {previous && (
                <StyledLink to={`/blog/${previous.slug}`} rel="prev">
                    {/* <AiOutlineArrowLeft/>&nbsp;{previous.frontmatter.title} */}
                    <AiOutlineArrowLeft/>&nbsp;Previous
                </StyledLink>
                )}
            </li>
            <li key="all">
                <StyledLink to={`/blog/`} rel="all">
                    <AiOutlineSearch/>&nbsp;All Articles
                </StyledLink>
            </li>
            <li key="forward">
                {next && (
                <StyledLink to={`/blog/${next.slug}`} rel="next">
                    {/* {next.frontmatter.title}&nbsp;<AiOutlineArrowRight/> */}
                    Next&nbsp;<AiOutlineArrowRight/>
                </StyledLink>
                )}
            </li>
        </Nav>
    )
}

export default PostNav

const Nav = styled.ul`
    position: sticky;
    top: 80px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    width: -webkit-fill-available;
    
    list-style: none;
    background: white;
    height: 50px;
    /* border-bottom: 1px solid ${props => props.theme.colors.gray.light}; */
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    z-index: 20;
    li {
        justify-self: center;
    }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${props => props.theme.colors.secondary.main};
  width: 6rem;
  font-size: clamp(0.75rem, 0.8125rem + 0.8333vw, 1rem);
  &:hover {
    color: ${props => props.theme.colors.primary.main};
  }
`