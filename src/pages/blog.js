import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

// import Bio from "../components/bio"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

import SearchPosts from "../components/blog/SearchPosts"
import { Container, Section, SectionHeader } from "../components/layout/Section"

class Blog extends React.Component {
  render() {
    const { data, navigate, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const localSearchBlog = data.localSearchBlog

    // console.info({posts})

    return (
      <Layout 
        location={this.props.location} 
        title={siteTitle}
      >
        <Seo title="All posts" />
        <StyledSection>
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
        </StyledSection>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
 padding-top: 0;
`

const StyledContainer = styled(Container)`
  flex-flow: column;
  max-width: 80vw;
  ${props => props.theme.xl`
      max-width: 95vw;
  `}
`