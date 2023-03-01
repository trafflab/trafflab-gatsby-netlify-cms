import * as React from "react"
import * as styles from './page-form.module.css';
import { LangContext } from "../../../../utils/contexts";
import MediaImage from "../../ui/media-image/media-image";
import TgButton from "../../common/tg-button/tg-button";

import image from '../../../../images/page-form/page-form.png';
import image_480 from '../../../../images/page-form/page-form480.png';
import image_webp from '../../../../images/page-form/page-form.webp';
import image_480_webp from '../../../../images/page-form/page-form480.webp';


export default function PageForm({isMiddle}) {
  const data = React.useContext(LangContext).pageForm;
  

  return (
    <section className={`${styles.pageForm} ${isMiddle ? styles.isMiddle : {}}`}>
      <div className={styles.content}>
        
        <div className={styles.formContainer}>
          <div className={styles.textImg}>
            <MediaImage
              image_webp={isMiddle ? data.textImg__webp : data.endTextImgWebp}
              image_480_webp={isMiddle ? data.textImg__webp : data.endTextImgWebp}
              image={isMiddle ? data.textImg : data.endTextImg}
              image_480={isMiddle ? data.textImg : data.endTextImg}
            />
          </div>
          <p className={styles.text}>{data.text}</p>
          <div className={styles.buttonContainer}><TgButton text='Стать партнером'/></div>
        </div>

        <div className={styles.imageContainer}>
          <MediaImage image_webp={image_webp} image_480_webp={image_480_webp} image={image} image_480={image_480} />
        </div>

      </div>

    </section>
  )
}