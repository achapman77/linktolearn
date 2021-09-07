import React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/Seo"

import SearchPosts from "../components/form/SearchPosts"
import { Button } from "../components/buttons/Button"

class Blog extends React.Component {
  render() {
    const { data, navigate, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const localSearchBlog = data.localSearchBlog

    // console.info({data, navigate, location, siteTitle, posts, localSearchBlog})

    return (
      <Layout 
        location={this.props.location} 
        title={siteTitle}
      >
        <Seo title="All posts" />
        <h1>Hello</h1>
        {/* <Bio /> */}
        
        <SearchPosts
          posts={posts}
          localSearchBlog={localSearchBlog}
          navigate={navigate}
          location={location}
        />
       
         <Button to="/">Home</Button>
        
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
          excerpt
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
