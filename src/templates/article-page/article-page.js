import * as React from 'react';
import * as styles from './article-page.module.css';
import { graphql } from 'gatsby';
import PageLayout from '../../components/layouts/page-layout/page-layout';
import { Helmet } from 'react-helmet';
import Paragraph from '../../components/common/paragraph/paragraph';
import MediaGatsbyImage from '../../components/ui/media-gatsby-image/media-gatsby-image';
import { LangContext } from '../../utils/contexts';
import enData from '../../misc/en-data'
import ruData from '../../misc/ru-data'
import uaData from '../../misc/ua-data'
import favicon from '../../images/misc/favicon.ico';
import { NavPopup } from '../../components/popups';
import BasicButton from '../../components/ui/basic-button/basic-button';
import { Link } from 'gatsby';

export function ArticlePageTemplate({ article }) {
  
  const [ navPopupOpen, setNavPopupOpen ] = React.useState(false);
  const openNavPopup = () =>  setNavPopupOpen(true);
  const closeNavPopup = () => setNavPopupOpen(false);

  React.useEffect(() => {
    if (localStorage.getItem('lang') !== article.lang) localStorage.setItem('lang', article.lang);
  }, []);

  const langData = article.lang === 'ru' ? ruData : article.lang === 'en' ? enData : uaData
  return (
    <>
      <Helmet htmlAttributes={{lang: article.lang === 'ua' ? 'uk' : article.lang}}>
        <meta charSet="utf-8" />
        <meta name="description" content="Trafflab" />
        <meta name="keywords" content="Trafflab" />
        <meta name="author" content="Trafflab" />
        <link rel="icon" type="image/x-icon" href={favicon}></link>
        <meta name="yandex-verification" content="627efef0ddde2878" />
        <meta name="google-site-verification" content="sitqCiT_sBfNtwKP81rRGUpgGUIptgDzy1b6I46xV6E" />
        <title>Trafflab | {article.title}</title>
      </Helmet>
      
        <LangContext.Provider value={langData}>
          <PageLayout openNavPopupHandler={openNavPopup}>
            <main className={styles.main}>
              <div className={styles.article}>
                {article.notReadyMessage 
                    ? <h3 className={styles.title}>{article.notReadyMessage}</h3>
                    : <div className={styles.content}>
                        <div className={styles.imageContainer}><MediaGatsbyImage image={article.image} /></div>
                        <h3 className={styles.title}>{article.title}</h3>
                        <div className={styles.textContainer}>
                          {
                            article.paragraphs.map((paragraph, index) => (
                              <Paragraph key={index} subtitle={paragraph.subtitle} text={paragraph.text}/>
                            ))
                          }
                        </div>
                      </div>
                }
              <Link to={`/${article.lang}#blog`} className={styles.backLink}>
                <BasicButton text={langData.articlePageBackButton} handler={() => null}/>
              </Link>
              </div>

            </main>
          </PageLayout>
          <NavPopup isOpen={navPopupOpen} closeHandler={closeNavPopup}/>
        </LangContext.Provider>
    </>
  )
}

export default function ArticlePage({ data }) {
  return <ArticlePageTemplate article={data.markdownRemark.frontmatter}/>
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        lang
        title
        notReadyMessage
        image {
          childImageSharp {
            gatsbyImageData(quality: 90, layout: CONSTRAINED)
          }
        }
        paragraphs {
          subtitle
          text
        }
      }
    }
  }
`