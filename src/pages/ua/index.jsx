import * as React from "react";
import IndexPageTemplate from "../../components/page-templates/index-page-tamplate";
import PageLayout from "../../components/layouts/page-layout/page-layout";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

export default function IndexPageUa({ data }) {
  return (
    <PageLayout pageTitle="Профітна екосистема">
      <Helmet>
        <meta name='description' content="для арбітражника будь-якого рівня"/>
        <meta name='keywords' content="Trafflab, арбітраж, ecosystem, аффилейт-маркетинг"/>
        <link rel="canonical" href="https://trafflab.com/ua" />
      </Helmet>
      <IndexPageTemplate blogData={data.allMarkdownRemark.edges} />
    </PageLayout>
  )
}

export const query = graphql`
  query IndexPageUaQuery($lang: String = "ua", $type: String = "article") {
    allMarkdownRemark(
      filter: {frontmatter: {lang: {eq: $lang}, type: {eq: $type}}}
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
          fields {
            slug
          }
        }
      }
    }
  }
`