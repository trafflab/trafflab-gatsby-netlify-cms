import * as React from 'react'
import * as styles from './how-to-page-template.module.css';
import BlogSectionContentLayout from '../../common/blog-section-content-layout/blog-section-content-layout';
import BlogPageList from '../../common/blog-page-list/blog-page-list';
import { Header, Footer } from '../../sections';
import { Is480Context, LangContext } from '../../../../utils/contexts';
import FixedContacts from '../../common/fixed-contacts/fixed-contacts';
import { NavPopup } from '../../popups';
import BasicButton from '../../ui/basic-button/basic-button';
import { Link } from 'gatsby';
import {getUrlLang} from '../../../../utils/utils'
export default function HowToPageTemplate({ blogData }) {
  
  const pageRef = React.useRef()
  const smoothScrollToHeader = () => pageRef.current.scrollIntoView({behavior: 'smooth'});
  const is480 = React.useContext(Is480Context);
  const langData = React.useContext(LangContext).blogPage.howToBlog

  const [ navPopupOpen, setNavPopupOpen ] = React.useState(false);
  const openNavPopup = () =>  setNavPopupOpen(true);
  const closeNavPopup = () => setNavPopupOpen(false);
  const lang = getUrlLang()
  return (
    <>
      <div ref={pageRef} className={styles.page}>
        <Header openNavPopupHandler={openNavPopup} />
        <main className={styles.main}>
          {
            blogData.length === 0 
            ? <h3 className={styles.noArticle}>{langData.noArticles}</h3>
            : <>
                <section className={styles.lastArticle}>

                </section>
                <section className={styles.blog}>
                  <BlogSectionContentLayout title={langData.title} about={langData.about}>
                    <BlogPageList articlesData={blogData}/>
                  </BlogSectionContentLayout>
                </section>
              </>
          }
          <Link to={`/${lang}/blog/`} className={styles.link}>
            <BasicButton text={langData.linkBlog} handler={() => null}/>
          </Link>
        </main>
        <Footer />
        {!is480 && <FixedContacts scrollHandler={smoothScrollToHeader} />}
      </div>
      <NavPopup isOpen={navPopupOpen} closeHandler={closeNavPopup}/>
    </>
  )
};
