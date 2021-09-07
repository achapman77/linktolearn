import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/Layout"
// import Seo from "../components/seo"
import Button from "../components/buttons/Button"
import SearchPosts from "../components/form/SearchPosts"
import Seo from "../components/seo"

const Blog = () => {
    const pageQuery = useStaticQuery(graphql`
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
                        }
                        slug
                    }
                }
            }
        }
    `)
    
    // const { data, navigate, location } = this.props
    const siteTitle = pageQuery.site.siteMetadata.title
    const posts = pageQuery.allMdx.edges
    const localSearchBlog = pageQuery.localSearchBlog

    console.info({siteTitle, posts, localSearchBlog})
    return (
        <Layout
            title={siteTitle}
        >
            <Seo title="All posts"/>
            <SearchPosts
                posts={posts}
                localSearchBlog={localSearchBlog}
                // navigate={navigate}
                // location={location}
            />
            <Link to="/">
                <Button marginTop="85px">Go Home</Button>
            </Link>
        </Layout>
    )
}

export default Blog

// class Blog extends React.Component {
//   render() {
//     // const { data, navigate, location } = this.props
//     // const siteTitle = data.site.siteMetadata.title
//     // const posts = data.allMdx.edges
//     // const localSearchBlog = data.localSearchBlog

//     console.info({pageQuery})

//     return (
//       <Layout 
//         // location={this.props.location} 
//         // title={siteTitle}
//       >
//         <SEO title="All posts" />
//         <h1>Hello</h1>
//         {/* <Bio /> */}
//         {/* <SearchPosts
//         //   posts={posts}
//         //   localSearchBlog={localSearchBlog}
//         //   navigate={navigate}
//         //   location={location}
//         /> */}
//         <Link to="/">
//           {/* <Button marginTop="85px">Go Home</Button> */}
//         </Link>
//       </Layout>
//     )
//   }
// }

// export default Blog

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     localSearchBlog {
//       index
//       store
//     }
//     allMdx(
//         sort: {fields: [frontmatter___date], order: DESC}
//         filter: {fileAbsolutePath: {regex: "/content/blog/"}}
//     ) {
//       edges {
//         node {
//           excerpt
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//           }
//           slug
//         }
//       }
//     }
//   }
// `
