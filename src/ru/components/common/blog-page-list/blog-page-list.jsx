import * as React from "react"
import * as styles from './blog-page-list.module.css';
import BlogPageCard from "../blog-page-card/blog-page-card";

export default function BlogPageList({ articlesData }) {

  return (
    <ul className={styles.list}>
      {
        articlesData.map((articleData, index) => (
          <li key={index} className={styles.listElement}>
            <BlogPageCard data={articleData}/>
          </li>
        ))
      }
    </ul>
  )
}