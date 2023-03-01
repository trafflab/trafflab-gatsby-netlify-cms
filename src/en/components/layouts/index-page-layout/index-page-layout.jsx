import '../../../../styles/global.css';
import '@splidejs/react-splide/css/core';
import * as React from "react";
import * as styles from './index-page-layout.module.css';

import BackgroundItems from "./background-items/background-items";
import { Header, Footer, Opening  } from "../../sections";
import FixedContacts from "../../common/fixed-contacts/fixed-contacts";
import SuccessMessage from '../../common/success-message/success-message';

import MediaImage from '../../ui/media-image/media-image';
import bubble1 from '../../../../images/background-elements/blurred-circle-1.png';
import bubble2_480 from '../../../../images/background-elements/blurred-circle-1-480.png';
import bubble1_webp from '../../../../images/background-elements/blurred-circle-1.webp';
import bubble2_480_webp from '../../../../images/background-elements/blurred-circle-1-480.webp';

import { Is480Context, MessagesContext } from '../../../../utils/contexts';

export default function IndexPageLayout({ children, openFormPopupHandler, openNavPopupHandler }) {
  
  const [isSuccessMessage, setIsSuccessMessage] = React.useState(false);

  const pageRef = React.useRef();
  const is480 = React.useContext(Is480Context)
  
  const smoothScrollToHeader = () => pageRef.current.scrollIntoView({behavior: 'smooth'});
  
  
  const showSuccessMessage = () => {
    setIsSuccessMessage(true)
    setTimeout(() => setIsSuccessMessage(false), 2000)
  } 

  return (
    <>
      <MessagesContext.Provider value={showSuccessMessage}>
          <div ref={pageRef} className={styles.page}>
            <BackgroundItems />
            
            <div className={styles.content}>
              
              <div className={styles.openingContainer}>
                <Header openNavPopupHandler={openNavPopupHandler}/>
                <Opening openFormPopupHandler={openFormPopupHandler} />
                <div className={styles.blurredBubbleContainer}><MediaImage image={bubble1} image_480={bubble2_480} image_webp={bubble1_webp} image_480_webp={bubble2_480_webp}/></div>
              </div>

              <main className={styles.main}>
                { children }
              </main>
              
              <Footer />
              {(!is480) && <FixedContacts scrollHandler={smoothScrollToHeader} />}
            </div>
            <SuccessMessage isShown={isSuccessMessage} />
          </div>
        </MessagesContext.Provider>

    </>
  )
}