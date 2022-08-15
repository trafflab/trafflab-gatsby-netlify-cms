import * as React from "react";
import IndexPageTemplate from "../../components/page-templates/index-page-tamplate";
import PageLayout from "../../components/layouts/page-layout/page-layout";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

export default function IndexPageEn({ data }) {

  return (
    <PageLayout pageTitle="Profitable ecosystem">
      <Helmet>
        <meta name='description' content="for affiliates of any level"/>
        <meta name='keywords' content="Trafflab, affiliates, ecosystem, аффилейт-маркетинг"/>
        <link rel="canonical" href="https://trafflab.com/en" />

      </Helmet>
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