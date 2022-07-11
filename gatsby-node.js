const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              lang
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const articles = result.data.allMarkdownRemark.edges
    articles.forEach((edge) => {
      if (edge.node.fields.slug !== '/') {
        createPage({
          path: edge.node.fields.slug,
          component: require.resolve(`./src/templates/article-page/article-page.js`),
          context: { slug: edge.node.fields.slug, },
        })
      } else {
        createPage({
          path: edge.node.fields.slug,
          component: require.resolve(`./src/templates/detect-lang-page.js`),
          context: { slug: edge.node.fields.slug, },
        })
      }



    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
