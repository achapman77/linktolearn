const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async function ({ actions, graphql }) {
    const blogPost = path.resolve(`./src/templates/blog-post.js`)
    const { data } = await graphql(`
        query {
            allMdx (
                sort: {fields: [frontmatter___date], order: DESC}
                filter: {fileAbsolutePath: {regex: "/content/blog/"}}
                limit: 1000
            ) {
                edges {
                    node {
                        slug
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    `)
    const posts = data.allMdx.edges
    posts.forEach( (post, index) => {
        // console.info({post})
        const previous = index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

        actions.createPage({
            path: `blog/${post.node.slug}`,
            component: require.resolve(`./src/templates/blog-post.js`),
            context: { 
                slug:post.node.slug,
                previous,
                next,
            },
        })

    })
    return null
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

