import React, { useEffect } from "react";
import BlogPageTemplate from "../../../components/page-templates/blog-page-template/blog-page-template";
import PageLayout from "../../../components/layouts/page-layout/page-layout";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

export default function BlogPage({ data }) {

  return (
    <PageLayout pageTitle='Trafflab blog'>
      <Helmet>
        <meta name='description' content="Актуальные новости, рекомендации по заливу, мануалы, инсайдерская информация из закрытых источников аффилейт-маркетинга. Читай блог TraffLab и будь в курсе всех событий рынка"/>
        <meta name='keywords' content="Trafflab, арбитраж, ecosystem, аффилейт-маркетинг, новости, мануалы, инсайдерская информация, рекомендации, блог"/>
        <link rel="canonical" href="https://trafflab.com/ru" />
      </Helmet>
      <BlogPageTemplate blogData={data.allMarkdownRemark.edges}/>
    </PageLayout>
  ) 
};

export const query = graphql`
  query BlogPageRuQuery($lang: String = "ru", $type: String = "article") {
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