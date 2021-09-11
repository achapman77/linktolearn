import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from "gatsby-plugin-mdx"

// import Bio from "../components/bio"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PostNav from "../components/blog/PostNav"
import { Section, SectionHeader, Container } from "../components/layout/Section"
import SearchPosts from "../components/blog/SearchPosts"
// import { rhythm, scale } from "../utils/typography"

import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineSearch } from 'react-icons/ai'
import { Button } from "../components/buttons/Button"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next, slug } = this.props.pageContext

    const { data, navigate, location } = this.props
    const posts = data.allMdx.edges
    const localSearchBlog = data.localSearchBlog
    let primary_image = getImage(post.frontmatter.primary_image)
    console.info({ slug, primary_image })

    return (
      <Layout 
        location={this.props.location} 
        title={siteTitle}
      >
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <PostNav previous={previous} next={next}/>
        <StyledSection>
          <StyledSectionHeader>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </StyledSectionHeader>
          <StyledContainer>
            <PrimaryImage image={primary_image} alt={post.frontmatter.title}/>
            <MDXRenderer>
                {post.body}
            </MDXRenderer>
          </StyledContainer>
        </StyledSection>
        {/* <Section>
          <SectionHeader>
            <h2>{siteTitle} Articles</h2>
            <p>Frequently Asked Questions, Updates, and Events</p>
          </SectionHeader>
          <StyledContainer>
            <SearchPosts
              posts={posts}
              localSearchBlog={localSearchBlog}
              navigate={navigate}
              location={location}
            />
          </StyledContainer>
        </Section> */}
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx( slug: { eq: $slug } ) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        primary_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(
        sort: {fields: [frontmatter___date], order: DESC}
        filter: {fileAbsolutePath: {regex: "/content/blog/"}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 160)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featured_blog
            primary_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          slug
        }
      }
    }
  }
`
const StyledSection = styled(Section)`
  padding-top: 0rem;
`

const StyledSectionHeader = styled(SectionHeader)`
  padding-top: 0rem;
  h1 {
    margin-top: 4rem;
  }
`
const StyledContainer = styled(Container)`
  flex-flow: column;
  gap: 1rem;
  padding: 0rem calc((100vw - 1600px) / 2 );
  padding-bottom: 4rem;
  p {
    width: -webkit-fill-available;
  }
`
const PrimaryImage = styled(GatsbyImage)`
`

