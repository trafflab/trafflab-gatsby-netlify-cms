import React from 'react'
import { ArticlePageTemplate } from '../../templates/article-page/article-page';

const ArticlePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <ArticlePageTemplate
      article={data}
    />
  )
}

export default ArticlePagePreview
