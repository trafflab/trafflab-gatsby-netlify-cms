import * as React from "react"
import * as styles from './opening.module.css';
import OpeningButton from "./opening-button/opening-button";
import TgButton from "../../common/tg-button/tg-button";

import OpeningImage from "./opening-image/opening-image";
import { Is480Context, LangContext } from "../../../../utils/contexts";

export default function Opening({openFormPopupHandler}) {
  const is480 = React.useContext(Is480Context);
  const data = React.useContext(LangContext).openingSection;

  return (
    <section id='opening' className={styles.opening}>
      <div className={styles.content}>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>{is480 ? data.title480 : data.title}</h1>
          <p className={styles.subtitle1}>{data.subtitle1}</p>
          <p className={styles.subtitle2}>{data.subtitle2}</p>
          <div className={styles.buttonsContainer}>
            <TgButton text='Я веб-мастер'/>
            <OpeningButton handler={openFormPopupHandler} text='Я рекламодатель'/>
          </div>
        </div>

      </div>
      <OpeningImage />
    </section>
  )
}