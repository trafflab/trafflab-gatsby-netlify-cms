import * as React from "react"
import * as styles from './blog-section-content-layout.module.css';

export default function BlogSectionContentLayout({
  title,
  about,
  children
}) {
  return (
    <div className={styles.content}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        {about && <p className={styles.about}>{about}</p>}
      </div>
      {children}
    </div>
  )
}