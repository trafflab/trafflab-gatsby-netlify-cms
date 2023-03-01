import * as React from "react";
import IndexPageTemplate from "../../ru/components/page-templates/index-page-tamplate";
import PageLayout from "../../ru/components/layouts/page-layout/page-layout";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

export default function IndexPageRu({ data }) {

  return (
    <PageLayout pageTitle="TRAFFLAB">
      <Helmet>
        <meta name='description' content="для арбитражника любого уровня"/>
        <meta name='keywords' content="Trafflab, арбитраж, ecosystem, аффилейт-маркетинг"/>
        <link rel="canonical" href="https://trafflab.com/ru" />
        <link rel="alternate" hreflang="ru" href="https://trafflab.com/ru" />
        <link rel="alternate" hreflang="en" href="https://trafflab.com/en" />
        <link rel="alternate" hreflang="uk" href="https://trafflab.com/ua" />
      </Helmet>
      <IndexPageTemplate blogData={data.allMarkdownRemark.edges} />
    </PageLayout>
  )
}

export const query = graphql`
  query IndexPageRuQuery($lang: String = "ru", $type: String = "article") {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: {lang: {eq: $lang}, type: {eq: $type}, customSlug: {in: ["top_services_gambling", "best_sources_for_gambling", "igaming_digest_1"]}}}
      ) {
      edges {
        node {
          html
          frontmatter {
            lang
            type
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