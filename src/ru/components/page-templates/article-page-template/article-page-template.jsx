import * as React from 'react'
import * as styles from './article-page-template.module.css';

import { Header, Footer } from '../../sections';
import { Is480Context, LangContext } from '../../../../utils/contexts';
import FixedContacts from '../../common/fixed-contacts/fixed-contacts';
import { Helmet } from 'react-helmet';
import MediaGatsbyImage from '../../../components/ui/media-gatsby-image/media-gatsby-image';
import { NavPopup } from '../../../components/popups';
import BasicButton from '../../../components/ui/basic-button/basic-button';
import { Link } from 'gatsby';

export default function ArticlePageTemplate({ article, content, path }) {
  
  const pageRef = React.useRef()
  const smoothScrollToHeader = () => pageRef.current.scrollIntoView({behavior: 'smooth'});
  const is480 = React.useContext(Is480Context)
  const langData = React.useContext(LangContext)
  const [ navPopupOpen, setNavPopupOpen ] = React.useState(false);
  const openNavPopup = () =>  setNavPopupOpen(true);
  const closeNavPopup = () => setNavPopupOpen(false);

  return (
    <>
      <Helmet>
        <title>{article.headTitle} | Trafflab.com</title>
        <meta name='description' content={article.headDescription}/>
        <meta name='keywords' content={article.headKeywords}/>
        <link rel="canonical" href={`https://trafflab.com${path}`} />
      </Helmet>
      <div ref={pageRef} className={styles.page}>
        <Header openNavPopupHandler={openNavPopup} />
        <main className={styles.main}>
          <div className={styles.article}>
            {article.notReadyMessage 
                ? <h1 className={styles.title}>{article.notReadyMessage}</h1>
                : <div className={styles.content}>
                    <div className={styles.imageContainer}><MediaGatsbyImage alt={article.title} image={article.image} /></div>
                    <h1 className={styles.title}>{article.title}</h1>
                    <div className={styles.textContainer} dangerouslySetInnerHTML={{ __html: content }} />
                    <p className={styles.date}>{article.date}</p>
                  </div>
            }
          <Link to={`/${article.lang}/blog`} className={styles.backLink}>
            <BasicButton text={langData.articlePageBackButton} handler={() => null}/>
          </Link>
          </div>
        </main>
        <Footer />
        {!is480 && <FixedContacts scrollHandler={smoothScrollToHeader} />}
      </div>
      <NavPopup isOpen={navPopupOpen} closeHandler={closeNavPopup}/>
    </>
  )
};
