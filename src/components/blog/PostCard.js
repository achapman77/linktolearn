import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Button } from '../buttons/Button'
import { AiOutlineArrowRight } from 'react-icons/ai'

const PostCard = ({node, title, className}) => {
    let image = getImage(node.frontmatter?.primary_image || node.primary_image)
    return (
        <Card to={`/blog/${node.slug}`} key={node.slug} className={ className }>
            <GatsbyImage image={image}/>
            <div className="wrapper">
                <h3>
                    {/* <Link to={`/blog/${node.slug}`}> */}
                    {title}
                    {/* </Link> */}
                </h3>
                <p className="date">{node.date || node.frontmatter?.date}</p>
                
                <p className="excerpt"
                    dangerouslySetInnerHTML={{
                    __html: node.description || node.frontmatter?.description || node.excerpt,
                    }}
                />
                <Button to={`/blog/${node.slug}`} className="readMoreBtn">Read More <AiOutlineArrowRight/></Button>
            </div>
        </Card>
    )
}

export default PostCard

const Card = styled(Link)`
    //common
    text-decoration: none;  
    color: ${props => props.theme.colors.gray.dark};
    
    h3 {
        text-transform: uppercase;
        text-decoration: none;
        a {
            text-decoration: none;
            color: ${props => props.theme.colors.gray.dark};
            &:hover {
                color: ${props => props.theme.colors.primary.main};
            }
        }
    }
    .date {
        font-style: italic;
        font-size: 0.8rem;
        margin: 1rem 0;
    }
    .excerpt {
        margin-bottom: 2rem;
    }
    .readMoreBtn {
        svg {
            margin: 0;
            margin-left: 0.5rem;
        }
    }
    .gatsby-image-wrapper {
        img {
        transform: scale(1);
        transition: 0.5s transform ease-in-out;
        }
    }
    &:hover {
        
        .gatsby-image-wrapper {
            img {
            transform: scale(1.1);
            transition: 2s transform ease-in-out;
            }
        }
    }

    //specialized
    &.featuredPost {
        display: flex;
        .wrapper {
            padding: 0 1rem;
            width: clamp(200px, 20vw, 600px);
        }

    }
    &.listPost {
        width: clamp(200px, 20vw, 31.5%);
        padding: 0.75rem;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        }
        .wrapper {
            margin-top: 1rem;
        }
    }
    &.searchResultPost {
        color: orange;
    }
`
