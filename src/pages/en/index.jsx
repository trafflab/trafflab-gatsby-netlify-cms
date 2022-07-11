import * as React from "react";
import IndexPageTemplate from "../../components/page-templates/index-page-tamplate";
import PageLayout from "../../components/layouts/page-layout/page-layout";
import { graphql } from "gatsby";

export default function IndexPageEn({ data }) {

  return (
    <PageLayout>
      <IndexPageTemplate blogData={data.allMarkdownRemark.edges} />
    </PageLayout>
  )
}

export const query = graphql`
  query IndexPageEnQuery($lang: String = "en") {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: {lang: {eq: $lang}}}
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