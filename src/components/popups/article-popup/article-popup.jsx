import * as React from "react"
import * as styles from './article-popup.module.css';
import PopupLayout from '../popup-layout/popup-layout';
import Paragraph from "../../common/paragraph/paragraph";

import MediaImage from "../../ui/media-image/media-image";
import { LangContext } from "../../../utils/contexts";

export default function ArticlePopup({isOpen, id, closeHandler}) {

  const data = React.useContext(LangContext).blog.articlesList[id];

  if (!data) return null
  return (
    <PopupLayout isOpen={isOpen} closeHandler={closeHandler}>

      <div className={styles.articlePopup}>
        <button onClick={closeHandler} className={styles.closeButton} />
        {data.notReadyMessage 
          ? <h3 className={styles.title}>{data.notReadyMessage}</h3>
          : <div className={styles.content}>
              <div className={styles.imageContainer}><MediaImage image_webp={data.articleImage_webp} image={data.articleImage} /></div>
              <h3 className={styles.title}>{data.title}</h3>
              <div className={styles.textContainer}>
                {
                  data.texts.map((paragraph, index) => (
                    <Paragraph key={index} subtitle={paragraph.subtitle} text={paragraph.text}/>
                  ))
                }
              </div>
            </div>
        }
        
      </div>
    </PopupLayout>

  )
}