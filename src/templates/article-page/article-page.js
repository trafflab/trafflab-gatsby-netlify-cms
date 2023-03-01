import * as React from 'react';
import { graphql } from 'gatsby';
import PageLayout from '../../ru/components/layouts/page-layout/page-layout';
import ArticlePageTemplate from '../../ru/components/page-templates/article-page-template/article-page-template';

export function ArticlePageCmsTemplate({ article, content, path='adminPanelPath' }) {
  return (
    <>
      <PageLayout>
        <ArticlePageTemplate article={article} content={content} path={path} />
      </PageLayout>
    </>
  )
}

export default function ArticlePage({ data }) {
  return <ArticlePageCmsTemplate 
    article={data.markdownRemark.frontmatter}
    content={data.markdownRemark.html}
    path={data.markdownRemark.fields.slug}
  />
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
      fields {
        slug
      }
    }
  }
`