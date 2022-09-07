import React, { useEffect } from "react";
import { navigate } from "gatsby";
import Loader from "../../../components/common/loader/loader";

const getRedirectLanguage = () => {

  if (typeof navigator === `undefined`) {
    return "en";
  }

  const lang = navigator && navigator.language && navigator.language.split("-")[0];
  if (!lang) return "en";

  switch (lang) {
    case "en":
      return "en";
    case "ru":
      return "ru";
    case "uk":
      return "ua";
    default:
      return "en";
  }
};

export default function BlogPage() {

  useEffect(() => {
    let urlLang
    const savedLang = localStorage.getItem('lang')
    if (savedLang) urlLang = localStorage.getItem('lang')
    else {
      urlLang = getRedirectLanguage();
      localStorage.setItem('lang', urlLang);
    }
    
    navigate(`/${urlLang}#blog`, {replace: true})

  }, []);

  return (
      <div style={{
        height: '100vh',
        widows: '100%',
        backgroundColor: 'var(--color-dark-2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
        <Loader />
      </div>
  ) 
};
