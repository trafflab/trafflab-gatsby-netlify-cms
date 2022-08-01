import * as React from "react"
import * as styles from './popup-layout.module.css';
import useDelayUnmountState from '../../../hooks/use-delay-unmount-state';

export default function PopupLayout({children, isOpen, closeHandler}) {
  
  const shouldMount = useDelayUnmountState(!!isOpen, 350);
  const animation = isOpen ? {animation: 'openAniamtion 0.35s ease-out'} : {animation: 'closeAniamtion 0.35s ease-out forwards'}

  const overlayClose = (evt) => {
    if (evt.target.classList.contains(styles.popupLayout)) closeHandler()
  }
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = 'fixed';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

  }, [isOpen])
  return (
    shouldMount &&
      <section
        onClick={overlayClose}
        className={styles.popupLayout}
        style={{...animation, display: shouldMount ? 'flex' : 'none'}}

      >
        {children}
      </section>
  )
}