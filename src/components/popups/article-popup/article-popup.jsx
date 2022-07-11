import * as React from "react"
import * as styles from './article-popup.module.css';
import PopupLayout from '../popup-layout/popup-layout';
import MediaGatsbyImage from "../../ui/media-gatsby-image/media-gatsby-image";

export default function ArticlePopup({isOpen, data, closeHandler}) {

  if (!data?.title) return null
  return (
    <PopupLayout isOpen={isOpen} closeHandler={closeHandler}>

      <div className={styles.articlePopup}>
        <button onClick={closeHandler} className={styles.closeButton} />
        {data.notReadyMessage 
          ? <h3 className={styles.title}>{data.notReadyMessage}</h3>
          : <div className={styles.content}>
              <div className={styles.imageContainer}><MediaGatsbyImage image={data.image} /></div>
              <h3 className={styles.title}>{data.title}</h3>
              <div className={styles.textContainer} dangerouslySetInnerHTML={{__html: data.text}} />
              <p className={styles.date}>{data.date}</p>
            </div>
        }
      </div>
    </PopupLayout>

  )
}