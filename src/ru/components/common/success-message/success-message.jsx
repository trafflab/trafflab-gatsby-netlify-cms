import * as React from "react"
import * as styles from './success-message.module.css';
import { LangContext } from '../../../../utils/contexts';

export default function SuccessMessage({isShown}) {
  const data = React.useContext(LangContext);
  
  return (
    <div className={`${styles.successMessage} ${isShown ? styles.isShown : ''}`}>
      <div className={styles.icon}/>
      <p className={styles.message}>{data.successMessage}</p>
    </div>
  )
}