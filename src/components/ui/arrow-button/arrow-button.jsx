import * as React from "react"
import * as styles from './arrow-button.module.css';

export default function ArrowButton({ isActive=true, handler, isSecondary, direction }) {

  const rotateTo = direction === 'right' ? 90 : direction === 'down' ? 180 : direction === 'left' ? 270 : 0

  return (
    <button
      className={`${styles.button} ${isSecondary ? styles.secondary : styles.primary}`}
      disabled={!isActive}
      style={isActive ? {} : {backgroundColor: 'var(--color-gray-2)'}}
      onClick={handler}
      type='button'
    >
      <div
        style={{transform: `rotate(${rotateTo}deg)`}}
        className={styles.icon} />
    </button>
  )
}