import * as React from "react"
import * as styles from './arrow-button-cover.module.css';

export default function ArrowButtonCover({ isSecondary, direction }) {

  const rotateTo = direction === 'right' ? 90 : direction === 'down' ? 180 : direction === 'left' ? 270 : 0

  return (
    <div className={`${styles.button} ${isSecondary ? styles.secondary : styles.primary}`}>
      <div
        style={{transform: `rotate(${rotateTo}deg)`}}
        className={styles.icon} />
    </div>
  )
}