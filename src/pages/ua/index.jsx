import * as React from "react";
import Helmet from "react-helmet";

import { LangContext } from "../../utils/contexts";
import uaData from "../../misc/ua-data";

import IndexPageLayout from "../../components/layouts/index-page-layout/index-page-layout";
import { FormPopup, ArticlePopup, NavPopup } from "../../components/popups";
import {
  CountriesMarquee,
  TrafficSources,
  WhatWeDo,
  Ecosystem,
  Blog,
  PartnersMarquee,
  Vacancies,
  PageForm,
} from '../../components/sections';
import { changeUrl } from "../../utils/utils";
import favicon from '../../images/misc/favicon.ico';

export default function IndexPage() {

  const [ articlePopupOpen, setArticlePopupOpen ] = React.useState(false);
  const [ articleId, setArticleId ] = React.useState(null);
  
  const [ formPopupOpen, setFormPopupOpen ] = React.useState(false);
  const [ navPopupOpen, setNavPopupOpen ] = React.useState(false);

  const openNavPopup = () =>  setNavPopupOpen(true);
  const closeNavPopup = () => setNavPopupOpen(false);

  const openFormPopup = () =>  setFormPopupOpen(true);
  const closeFormPopup = () => setFormPopupOpen(false);

  const openArticlePopup = (id, slug) => {
    setArticleId(id)
    changeUrl(`/ua/blog/${slug}`)
    setArticlePopupOpen(true);
  }  
  const closeArticlePopup = () => {
    setArticlePopupOpen(false);
    changeUrl(`/ua/`)
    // setArticleId(null)
  }
  React.useEffect(() => {
    if (localStorage.getItem('lang') !== 'ua' ) localStorage.setItem('lang', 'ua');
  }, [])

  return (
    <>
      <Helmet htmlAttributes={{lang: 'uk'}}>
        <meta charSet="utf-8" />
        <meta name="description" content="Trafflab" />
        <meta name="keywords" content="Trafflab" />
        <meta name="author" content="Trafflab" />
        <link rel="icon" type="image/x-icon" href={favicon}></link>
        <meta name="yandex-verification" content="627efef0ddde2878" />
        <meta name="google-site-verification" content="sitqCiT_sBfNtwKP81rRGUpgGUIptgDzy1b6I46xV6E" />
        <title>Trafflab | Ua </title>
      </Helmet>

      <LangContext.Provider value={uaData}>

        <IndexPageLayout openNavPopupHandler={openNavPopup}  openFormPopupHandler={openFormPopup}>
          <CountriesMarquee />
          <TrafficSources />
          <WhatWeDo openFormPopupHandler={openFormPopup}/>
          <Ecosystem />
          <Blog openArticlePopupHandler={openArticlePopup}/>
          <PartnersMarquee />
          <Vacancies />
          <PageForm />

          <ArticlePopup id={articleId} isOpen={articlePopupOpen} closeHandler={closeArticlePopup} />
          <FormPopup isOpen={formPopupOpen} closeHandler={closeFormPopup}/>
          <NavPopup isOpen={navPopupOpen} closeHandler={closeNavPopup}/>
        </IndexPageLayout>

      </LangContext.Provider>

    </>
  )
}
