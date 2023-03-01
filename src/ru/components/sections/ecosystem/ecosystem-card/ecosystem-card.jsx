import * as React from "react"
import * as styles from './ecosystem-card.module.css';

export default function EcosystemCard({ cardClass, linkTo }) {
  return (
    <article className={`${styles.card} ${styles[cardClass]}`}>
      <a target='__blank' href={linkTo}><div className={styles.logo}/></a>
    </article>
  )
}