import * as React from "react"
import * as styles from './blog-page-card.module.css';
import MediaGatsbyImage from "../../ui/media-gatsby-image/media-gatsby-image";
import { Link } from "gatsby";

export default function BlogCard({ data }) {
  const article = data?.node?.frontmatter ? data.node.frontmatter : data
  return (
    <article className={styles.card}>
      <Link to={data.node.fields.slug} className={styles.linkTo} >

        <div className={styles.imageContainer}>
          <MediaGatsbyImage
            image={article.cardImage}
            loadingType='lazy'
          />
          </div>
        <div className={styles.textContainer}>
          <div className={styles.about}>
            <h3 className={styles.title}>{article.cardTitle}</h3>
            <p className={styles.text}>{article.cardText}</p>
          </div>
        </div>

      </Link>
    </article>
  )
}