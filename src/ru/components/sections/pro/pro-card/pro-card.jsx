import * as React from "react"
import * as styles from './pro-card.module.css';
import MediaImage from "../../../ui/media-image/media-image";

export default function ProCard({ data }) {

  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <MediaImage image={data.photo} image_webp={data.photo_webp} alt={data.imageAlt} />
        </div>
        <ul className={styles.list}>
          {
            data.about.map((elementData, index) => (
              <li key={index} className={styles.element}><pre className={styles.elementText}>{elementData}</pre></li>
            ))
          }
          </ul>
      </div>
    </article>
  )
}