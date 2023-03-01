import * as React from "react"
import * as styles from './nav-list.module.css';
import NavListElement from "./nav-list-element/nav-list-element";
import { LangContext } from "../../../../utils/contexts";
import { getUrlLang } from "../../../../utils/utils";

export default function NavList({ isFooter=false }) {
  const data = React.useContext(LangContext).navList
  const lang = getUrlLang()
  return (
    <nav className={styles.nav}>
      <ul style={{color: [isFooter ? 'var(--color-white)' : 'var(--color-gray-2)']}} className={styles.list}>
        <NavListElement text={data.sources} linkTo={`/${lang}#sources`} isFooter={isFooter} />
        <NavListElement text={data.ecosystem} linkTo={`/${lang}#ecosystem`} isFooter={isFooter} />
        <NavListElement text={data.blog} linkTo={`/${lang}/blog`} isFooter={isFooter} />
        <NavListElement text={data.partners} linkTo={`/${lang}#partners`} isFooter={isFooter} />
        <NavListElement text={data.vacancies} linkTo={`/${lang}#vacancies`} isFooter={isFooter} />
        { !isFooter && <NavListElement text={data.contacts} linkTo='#contacts' isFooter={isFooter} />}
      </ul>
    </nav>
  )
}