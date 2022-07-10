import * as React from 'react'
import * as styles from './page-layout.module.css';
import '../../../styles/global.css';
import { Header, Footer } from '../../sections';
import useIs480 from '../../../hooks/use-is-480';
import { Is480Context } from '../../../utils/contexts';
import FixedContacts from '../../common/fixed-contacts/fixed-contacts';

export default function PageLayout({ children, openNavPopupHandler }) {
  const pageRef = React.useRef()
  const smoothScrollToHeader = () => pageRef.current.scrollIntoView({behavior: 'smooth'});
  const is480 = useIs480()

  return (
    <Is480Context.Provider value={is480}>
      <div ref={pageRef} className={styles.page}>
        <Header openNavPopupHandler={openNavPopupHandler} />
          <main>
            {children}
          </main>
        <Footer />
        {!is480 && <FixedContacts scrollHandler={smoothScrollToHeader} />}

      </div>
    </Is480Context.Provider>
  )
};
