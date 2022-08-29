import * as React from 'react';
import { graphql } from 'gatsby';
import PageLayout from '../../components/layouts/page-layout/page-layout';
import ArticlePageTemplate from '../../components/page-templates/article-page-template/article-page-template';

export function ArticlePageCmsTemplate({ article, content }) {
  return (
    <>
      <PageLayout>
        <ArticlePageTemplate article={article} content={content} />
      </PageLayout>
    </>
  )
}

export default function ArticlePage({ data }) {
  return <ArticlePageCmsTemplate article={data.markdownRemark.frontmatter} content={data.markdownRemark.html}/>
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        lang
        date(formatString: "DD.MM.YYYY")
        title
        headTitle
        headDescription
        headKeywords
        notReadyMessage
        image {
          childImageSharp {
            gatsbyImageData(quality: 95, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`