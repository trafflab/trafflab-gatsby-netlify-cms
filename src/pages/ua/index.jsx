import * as React from "react";
import IndexPageTemplate from "../../components/page-templates/index-page-tamplate";
import PageLayout from "../../components/layouts/page-layout/page-layout";
import { graphql } from "gatsby";

export default function IndexPageUa({ data }) {
  return (
    <PageLayout>
      <IndexPageTemplate blogData={data.allMarkdownRemark.edges} />
    </PageLayout>
  )
}

export const query = graphql`
  query IndexPageUaQuery($lang: String = "ua") {
    allMarkdownRemark(
      filter: {frontmatter: {lang: {eq: $lang}}}
      sort: { order: DESC, fields: [frontmatter___date] }
      ) {
      edges {
        node {
          html
          frontmatter {
            lang
            date(formatString: "DD.MM.YYYY")
            customSlug
            notReadyMessage
            title
            image {
              childImageSharp {
                gatsbyImageData(quality: 95, layout: CONSTRAINED)
              }
            }
            cardTitle
            cardText
            cardImage {
              childImageSharp {
                gatsbyImageData(quality: 95, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`