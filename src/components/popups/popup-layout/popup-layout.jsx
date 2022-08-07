import * as React from "react"
import * as styles from './popup-layout.module.css';
import useDelayUnmountState from '../../../hooks/use-delay-unmount-state';

export default function PopupLayout({children, isOpen, closeHandler}) {
  
  const shouldMount = useDelayUnmountState(!!isOpen, 1000);
  const animation = isOpen ? {animation: 'openAniamtion 1s ease-out'} : {animation: 'closeAniamtion 1s ease-out forwards'}
  const [scrollY, setScrollY] = React.useState(0)

  const overlayClose = (evt) => {
    if (evt.target.classList.contains(styles.popupLayout)) closeHandler()
  }
  React.useEffect(() => {
    if (isOpen) {
      const offset = window.scrollY
      setScrollY(offset)
      document.body.style.top = `-${offset}px`;
      document.body.style.position = 'fixed';
    } else {
      console.log(scrollY);
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
      document.body.style.position = '';
      document.body.style.top = '';
    }

  }, [isOpen])
  return (
    shouldMount &&
      <section
        onClick={overlayClose}
        className={styles.popupLayout}
        style={{...animation}}

      >
        {children}
      </section>
  )
}