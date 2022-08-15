module.exports = {
  siteMetadata: {
    title: "Trafflab",
    description: "Trafflab",
    siteUrl: `https://trafflab.com`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  date
                }
              }
            }
          }
        }
        `,
        output: '/',
        resolveSiteUrl: () => 'https://trafflab.com',
        resolvePages: ({ allMarkdownRemark: { edges } }) => {
          return edges.map((page) => ({
            path: page.node.fields.slug,
            date: page.node.frontmatter.date
          }))
        },
        serialize: ({path, date}) => ({
          url: path,
          lastmod: date
        })
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://trafflab.com',
        sitemap: 'https://trafflab.com/sitemap-0.xml',
      }
    },
    "gatsby-plugin-react-helmet",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-6TR3D406KP",
        ],
        pluginConfig: {
          head: true,
          respectDNT: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
