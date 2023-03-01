import * as React from "react"
import * as styles from './opening-button.module.css';

export default function OpeningButton({ text, handler, isActive=true }) {
  return (
    <button
      className={styles.button}
      style={isActive ? {} : {backgroundColor: 'var(--color-gray-2)'}}
      disabled={!isActive}
      onClick={handler}
      type='button'
    >{text}</button>
  )
}