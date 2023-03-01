import React from 'react'
import { ArticlePageCmsTemplate } from '../../templates/article-page/article-page';
import BlogCard from '../../ru/components/sections/blog/blog-card/blog-card';

const ArticlePagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  const handledDate = `${data.date.getDay()}.${data.date.getDate()}.${data.date.getFullYear()}`
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <ArticlePageCmsTemplate
        article={{...data, date: handledDate}}
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
