import * as React from "react"
import * as styles from './pro.module.css';
import SectionContentLayout from "../../common/section-content-layout/section-content-layout";
import { SplideSlide } from '@splidejs/react-splide';
import ProCard from "./pro-card/pro-card";
import SliderLayout from "../../common/slider-layout/slider-layout";
import {LangContext, Is480Context} from '../../../../utils/contexts';

export default function Pro() {
  const data = React.useContext(LangContext).pro;
  const is480 = React.useContext(Is480Context);

  return (
    <section id='pro' className={styles.pro}>
      <SectionContentLayout
        titleSecondPart={data.subtitle}
        text={data.text}
        textStyle={{width: '1150rem'}}
      >
        {
          is480 
            ? <div className={styles.splideContainer}><SliderLayout>
                {
                  data.pros.map((prosData, index) => (
                    <SplideSlide key={index}><ProCard data={prosData} /></SplideSlide>
                  ))
                }
              </SliderLayout></div>
            : <ul className={styles.list}>
                {
                  data.pros.map((prosData, index) => (
                    <li key={index}><ProCard data={prosData} /></li>
                  ))
                }
              </ul>
        }

      </SectionContentLayout>
    </section>
  )
  
}