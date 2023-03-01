import * as React from "react";
import IndexPageTemplate from "../../en/components/page-templates/index-page-tamplate";
import PageLayout from "../../en/components/layouts/page-layout/page-layout";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

export default function IndexPageEn({ data }) {

  return (
    <PageLayout pageTitle="Profitable ecosystem">
      <Helmet>
        <meta name='description' content="for affiliates of any level"/>
        <meta name='keywords' content="Trafflab, affiliates, ecosystem, аффилейт-маркетинг"/>
        <link rel="canonical" href="https://trafflab.com/en" />
        <link rel="alternate" hreflang="ru" href="https://trafflab.com/ru" />
        <link rel="alternate" hreflang="en" href="https://trafflab.com/en" />
        <link rel="alternate" hreflang="uk" href="https://trafflab.com/ua" />
      </Helmet>
      <IndexPageTemplate blogData={data.allMarkdownRemark.edges} />
    </PageLayout>
  )
}

export const query = graphql`
  query IndexPageEnQuery($lang: String = "en", $type: String = "article") {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: {lang: {eq: $lang}, type: {eq: $type}}}
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
          fields {
            slug
          }
        }
      }
    }
  }
`