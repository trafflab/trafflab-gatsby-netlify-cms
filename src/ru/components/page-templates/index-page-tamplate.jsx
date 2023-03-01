import * as React from "react";
import IndexPageLayout from "../layouts/index-page-layout/index-page-layout";
import { FormPopup, ArticlePopup, NavPopup } from "../popups";
import {
  CountriesMarquee,
  TrafficSources,
  WhatWeDo,
  Ecosystem,
  Blog,
  PartnersMarquee,
  Vacancies,
  PageForm,
  Statistics,
  Pro
} from '../sections';
import { changeUrl } from "../../../utils/utils";
import { SiteLangContext } from "../../../utils/contexts";

export default function IndexPageTemplate({ blogData }) {

  const [ articlePopupOpen, setArticlePopupOpen ] = React.useState(false);
  const [ articleData, setArticleData ] = React.useState({});

  const [ formPopupOpen, setFormPopupOpen ] = React.useState(false);
  const [ navPopupOpen, setNavPopupOpen ] = React.useState(false);

  const openNavPopup = () =>  setNavPopupOpen(true);
  const closeNavPopup = () => setNavPopupOpen(false);

  const openFormPopup = () =>  setFormPopupOpen(true);
  const closeFormPopup = () => setFormPopupOpen(false);

  const siteLang = React.useContext(SiteLangContext)

  const openArticlePopup = (articleData, slug) => {
    setArticleData(articleData)
    changeUrl(slug)
    setArticlePopupOpen(true);
  }  
  const closeArticlePopup = () => {
    setArticlePopupOpen(false);
    // setArticleId(null)
    changeUrl(`/${siteLang}/`)
  }

  return (
    <IndexPageLayout openNavPopupHandler={openNavPopup}  openFormPopupHandler={openFormPopup}>
      <Statistics />
      <WhatWeDo openFormPopupHandler={openFormPopup}/>
      <Pro />
      <CountriesMarquee />
      <PageForm isMiddle />
      <TrafficSources />
      <Ecosystem />
      <Blog articlesData={blogData} openArticlePopupHandler={openArticlePopup}/>
      <PartnersMarquee />
      <Vacancies />
      <PageForm  />

      <ArticlePopup data={articleData} isOpen={articlePopupOpen} closeHandler={closeArticlePopup} />
      <FormPopup isOpen={formPopupOpen} closeHandler={closeFormPopup}/>
      <NavPopup isOpen={navPopupOpen} closeHandler={closeNavPopup}/>
    </IndexPageLayout>
  )
}