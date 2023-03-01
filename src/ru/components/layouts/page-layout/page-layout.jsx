import * as React from 'react'
import * as styles from './page-layout.module.css';
import '../../../../styles/global.css';
import useIs480 from '../../../../hooks/use-is-480';
import { Is480Context, SiteLangContext, LangContext } from '../../../../utils/contexts';
import { getUrlLang } from '../../../../utils/utils';
import Helmet from "react-helmet";
import favicon from '../../../../images/misc/favicon.ico'
// import enData from '../../../misc/en-data'
import ruData from '../../../../misc/ru-data'
// import uaData from '../../../misc/ua-data'
import { YMInitializer } from 'react-yandex-metrika';

export default function PageLayout({ children, pageTitle = 'Trafflab' }) {
  const is480 = useIs480()
  const siteLang = getUrlLang()
  // const langData = siteLang === 'ru' ? ruData : siteLang === 'en' ? enData : uaData
  const langData = ruData

  React.useEffect(() => {
    if (localStorage.getItem('lang') !== 'ru' ) localStorage.setItem('lang', 'ru');
  }, [])
  
  return (
    <SiteLangContext.Provider value={siteLang}>
      <Is480Context.Provider value={is480}>
        <LangContext.Provider value={langData}>
          <Helmet htmlAttributes={{lang: siteLang === 'ua' ? 'uk' : siteLang}}>
            <meta charSet="utf-8" />
            <meta name="author" content="Trafflab" />
            <link rel="icon" type="image/x-icon" href={favicon}></link>
            <meta name="yandex-verification" content="627efef0ddde2878" />
            <meta name="google-site-verification" content="sitqCiT_sBfNtwKP81rRGUpgGUIptgDzy1b6I46xV6E" />
            <title>{pageTitle}</title>
          </Helmet>
          {children}
          <YMInitializer accounts={[89406166]} options={{webvisor: true}} version="2" />
        </LangContext.Provider>
      </Is480Context.Provider>
    </SiteLangContext.Provider>
  )
};
