import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import ArticlePagePreview from './preview-templates/article-page-preview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)


CMS.registerPreviewTemplate('articlesRu', ArticlePagePreview)
CMS.registerPreviewTemplate('articlesEn', ArticlePagePreview)
CMS.registerPreviewTemplate('articlesUa', ArticlePagePreview)
