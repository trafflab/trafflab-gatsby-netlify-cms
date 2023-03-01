import * as React from "react";
import * as styles from './background-items.module.css';

import netSvg from '../../../../../images/background-elements/net.svg';

import AnimatedLine from "./animated-line/animated-line";

import bubble2 from '../../../../../images/background-elements/blurred-circle-2.png'
import bubble3 from '../../../../../images/background-elements/blurred-circle-3.png'
import bubble4 from '../../../../../images/background-elements/blurred-circle-4.png'
import bubble5 from '../../../../../images/background-elements/blurred-circle-5.png'
import bubble6 from '../../../../../images/background-elements/blurred-circle-6.png'
import bubble2_480 from '../../../../../images/background-elements/blurred-circle-2-480.png'
import bubble3_480 from '../../../../../images/background-elements/blurred-circle-3-480.png'
import bubble4_480 from '../../../../../images/background-elements/blurred-circle-4-480.png'
import bubble5_480 from '../../../../../images/background-elements/blurred-circle-5-480.png'
import bubble6_480 from '../../../../../images/background-elements/blurred-circle-6-480.png'

import bubble2_webp from '../../../../../images/background-elements/blurred-circle-2.webp'
import bubble3_webp from '../../../../../images/background-elements/blurred-circle-3.webp'
import bubble4_webp from '../../../../../images/background-elements/blurred-circle-4.webp'
import bubble5_webp from '../../../../../images/background-elements/blurred-circle-5.webp'
import bubble6_webp from '../../../../../images/background-elements/blurred-circle-6.webp'
import bubble2_480_webp from '../../../../../images/background-elements/blurred-circle-2-480.webp'
import bubble3_480_webp from '../../../../../images/background-elements/blurred-circle-3-480.webp'
import bubble4_480_webp from '../../../../../images/background-elements/blurred-circle-4-480.webp'
import bubble6_480_webp from '../../../../../images/background-elements/blurred-circle-6-480.webp'
import bubble5_480_webp from '../../../../../images/background-elements/blurred-circle-5-480.webp'

import MediaImage from "../../../ui/media-image/media-image";
import { LangContext, Is480Context } from "../../../../../utils/contexts";

export default function BackgroundItems() {
  const [ offset, setOffset ] = React.useState(0)

  const lang = React.useContext(LangContext).lang
  const is480 = React.useContext(Is480Context);
  const langPrefix =  lang !== 'ru' ? lang : '';

  React.useEffect(() => {
    const documentHeight = document.body.scrollHeight
    const ratioDevide = is480 ? 110 : 100;
    const handleScroll = () => setOffset((window.pageYOffset / documentHeight) * ratioDevide);
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset])
  
  return (
    <div className={styles.backgroundItems}>
      <div className={`${styles.net1} ${styles['net1' + langPrefix]}`}><MediaImage image={netSvg} no480={true}/></div>
      <div className={`${styles.net2} ${styles['net2' + langPrefix]}`}><MediaImage image={netSvg} no480={true}/></div>
      <div className={`${styles.net3} ${styles['net3' + langPrefix]}`}><MediaImage image={netSvg} no480={true}/></div>
      <div className={`${styles.net4} ${styles['net4' + langPrefix]}`}><MediaImage image={netSvg} no480={true}/></div>
      
      <div className={`${styles.line1} ${styles['line1' + langPrefix]}`}><AnimatedLine position={offset}/></div>
      <div className={`${styles.line2} ${styles['line2' + langPrefix]}`}><AnimatedLine position={offset} isRight={true} /></div>
      <div className={`${styles.line3} ${styles['line3' + langPrefix]}`}><AnimatedLine position={offset}/></div>
      <div className={`${styles.line4} ${styles['line4' + langPrefix]}`}><AnimatedLine position={offset} isRight={true} /></div>
      
      <div className={`${styles.blurredBubble2} ${styles['blurredBubble2' + langPrefix]}`}><MediaImage image_webp={bubble2_webp} image_480_webp={bubble2_480_webp} image={bubble2} image_480={bubble2_480}/></div>
      <div className={`${styles.blurredBubble3} ${styles['blurredBubble3' + langPrefix]}`}><MediaImage image_webp={bubble3_webp} image_480_webp={bubble3_480_webp} image={bubble3} image_480={bubble3_480}/></div>
      <div className={`${styles.blurredBubble4} ${styles['blurredBubble4' + langPrefix]}`}><MediaImage image_webp={bubble4_webp} image_480_webp={bubble4_480_webp} image={bubble4} image_480={bubble4_480}/></div>
      <div className={`${styles.blurredBubble5} ${styles['blurredBubble5' + langPrefix]}`}><MediaImage image_webp={bubble5_webp} image_480_webp={bubble5_480_webp} image={bubble5} image_480={bubble5_480}/></div>
      <div className={`${styles.blurredBubble6} ${styles['blurredBubble6' + langPrefix]}`}><MediaImage image_webp={bubble6_webp} image_480_webp={bubble6_480_webp} image={bubble6} image_480={bubble6_480}/></div>
      <div className={`${styles.blurredBubble7} ${styles['blurredBubble3' + langPrefix]}`}><MediaImage image_webp={bubble3_webp} image_480_webp={bubble3_480_webp} image={bubble3} image_480={bubble3_480}/></div>
    </div>
  )
}