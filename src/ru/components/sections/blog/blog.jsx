import * as React from "react"
import * as styles from './blog.module.css';
import SectionContentLayout from "../../common/section-content-layout/section-content-layout";
import BlogCard from "./blog-card/blog-card";

import SliderLayout from "../../common/slider-layout/slider-layout";
import { SplideSlide } from '@splidejs/react-splide';
import { LangContext, Is480Context } from "../../../../utils/contexts";
import BasicButton from "../../ui/basic-button/basic-button";
import { navigate } from "gatsby";

export default function Blog({ openArticlePopupHandler, articlesData }) {
  const data = React.useContext(LangContext).blog;
  const is480 = React.useContext(Is480Context);
  return (
    <section id="blog" className={styles.blog}>
      <SectionContentLayout
        titleSecondPart={data.subtitle}
        text={data.text}
        textStyle={{width: '680rem'}}
        noMarginBottom={true}
      >
        {
          is480
            ? <div className={styles.listContainer}>
                <SliderLayout>
                  {
                    articlesData.map((articleData, index) => (
                      <SplideSlide key={index}><BlogCard openHandler={openArticlePopupHandler} data={articleData}/></SplideSlide>
                    ))
                  }
                </SliderLayout>
              </div>
            : <ul className={styles.list}>
                {
                  articlesData.map((articleData, index) => (
                    <li key={index}><BlogCard openHandler={openArticlePopupHandler} data={articleData}/></li>
                  ))
                }
              </ul>
        }
      </SectionContentLayout>
      <div className={styles.buttonContainer}>
          <BasicButton text='Больше статей!' handler={() => navigate('blog')}/>
      </div>
    </section>
  )
}