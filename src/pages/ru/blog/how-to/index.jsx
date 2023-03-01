import React, { useEffect } from "react";
import HowToPageTemplate from "../../../../ru/components/page-templates/how-to-page-template/how-to-page-template";
import PageLayout from "../../../../ru/components/layouts/page-layout/page-layout";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

export default function HowToPage({ data }) {

  return (
    <PageLayout pageTitle='Trafflab howTo'>
      <Helmet>
        <meta name='description' content="Актуальные новости, рекомендации по заливу, мануалы, инсайдерская информация из закрытых источников аффилейт-маркетинга. Читай блог TraffLab и будь в курсе всех событий рынка"/>
        <meta name='keywords' content="Trafflab, арбитраж, ecosystem, аффилейт-маркетинг, новости, мануалы, инсайдерская информация, рекомендации, блог"/>
        <link rel="canonical" href="https://trafflab.com/ru" />
        <link rel="alternate" hreflang="ru" href="https://trafflab.com/ru/blog/how-to" />
        <link rel="alternate" hreflang="en" href="https://trafflab.com/en/blog/how-to" />
        <link rel="alternate" hreflang="uk" href="https://trafflab.com/ua/blog/how-to" />
      </Helmet>
      <HowToPageTemplate blogData={data.allMarkdownRemark.edges}/>
    </PageLayout>
  ) 
};

export const query = graphql`
  query HowToPageRuQuery($lang: String = "ru", $type: String = "seoArticle") {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: {lang: {eq: $lang}, type: {eq: $type}}}
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