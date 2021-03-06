import * as React from "react";
import IndexPageTemplate from "../../components/page-templates/index-page-tamplate";
import PageLayout from "../../components/layouts/page-layout/page-layout";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

export default function IndexPageRu({ data }) {

  return (
    <PageLayout pageTitle="Trafflab | Ru">
      <Helmet>
        <meta name='description' content="Профитная экосистема для арбитражника любого уровня"/>
        <meta name='keywords' content="Trafflab, арбитраж, ecosystem, аффилейт-маркетинг"/>
      </Helmet>
      <IndexPageTemplate blogData={data.allMarkdownRemark.edges} />
    </PageLayout>
  )
}

export const query = graphql`
  query IndexPageRuQuery($lang: String = "ru") {
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