import * as React from "react"
import * as styles from './statistics.module.css';
import {LangContext} from '../../../../utils/contexts'

export default function Statistics() {
  const data = React.useContext(LangContext).statistics;

  return (
    <section className={styles.statistics}>
      <div className={styles.content}>
        <ul className={styles.list}>
          {
            data.map((statData, index) => (
              <li key={index} className={styles.listElement}>
                <p className={styles.stat}>{statData.stat}</p>
                <p className={styles.statDisc}>{statData.statDisc}</p>
              </li>
            ))
          }
        </ul>
      </div>
      
    </section>
  )
}