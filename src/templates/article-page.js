import * as React from 'react';
import { graphql } from 'gatsby';
import MediaGatsbyImage from '../components/media-gatsby-image/media-gatsby-image'

export function ArticlePageTemplate({ article }) {
  console.log(article);
  return (
    <div style={{backgroundColor: 'blue'}}>
      article page
      <MediaGatsbyImage image={article.image} />
    </div>
    
  )
}

export default function ArticlePage({ data }) {
  return <ArticlePageTemplate article={data.markdownRemark.frontmatter}/>
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        lang
        title
        notReadyMessage
        image {
          childImageSharp {
            gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
          }
        }
        paragraphs {
          subtitle
          text
        }
      }
    }
  }
`
// export const pageQuery = graphql`
//   query BlogPostByID($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       id
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         title
//         description
//         tags
//       }
//     }
//   }
// `;
