import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PostNav from "../components/blog/PostNav"
import { Section, SectionHeader, Container } from "../components/layout/Section"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    let primary_image = getImage(post.frontmatter.primary_image)

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
  padding-bottom: 2rem;
  
  h1 {
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    max-width: 65rem;
  }
`
const StyledContainer = styled(Container)`
  flex-flow: column;
  gap: 1rem;
  padding: 0rem calc((100vw - 1600px) / 2 );
  padding-bottom: 4rem;
  p {
    width: -webkit-fill-available;
    padding: 1rem;
  }
`
const PrimaryImage = styled(GatsbyImage)`
 max-width: 65rem;
 margin: 0 1rem;
`

