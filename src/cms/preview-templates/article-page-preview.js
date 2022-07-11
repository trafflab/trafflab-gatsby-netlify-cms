import React from 'react'
import { ArticlePageCmsTemplate } from '../../templates/article-page/article-page';
import BlogCard from '../../components/sections/blog/blog-card/blog-card';

const ArticlePagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <ArticlePageCmsTemplate
        article={data}
        content={data.body}
      />
      <BlogCard data={{
        cardImage: data.cardImage,
        cardTitle: data.cardTitle,
        cardText: data.cardText
      }}/>
    </div>
  )
}

export default ArticlePagePreview
