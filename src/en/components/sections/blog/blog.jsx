import * as React from "react"
import * as styles from './blog.module.css';
import SectionContentLayout from "../../common/section-content-layout/section-content-layout";
import BlogCard from "./blog-card/blog-card";
import BasicButton from "../../ui/basic-button/basic-button";
import { navigate } from "gatsby";
import SliderLayout from "../../common/slider-layout/slider-layout";
import { SplideSlide } from '@splidejs/react-splide';
import { LangContext } from "../../../../utils/contexts";

export default function Blog({ openArticlePopupHandler, articlesData }) {
  const data = React.useContext(LangContext).blog;

  return (
    <section id="blog" className={styles.blog}>
      <SectionContentLayout
        titleSecondPart={data.subtitle}
        text={data.text}
        textStyle={{width: '680rem'}}
        noMarginBottom={true}
      >
        <ul className={styles.list}>
          <SliderLayout>
            {
              articlesData.map((articleData, index) => (
                <SplideSlide key={index}><BlogCard openHandler={openArticlePopupHandler} data={articleData}/></SplideSlide>
              ))
            }
          </SliderLayout>
        </ul>
        <div className={styles.buttonContainer}>
          <BasicButton text={data.buttonText} handler={() => navigate('blog')}/>
        </div>
      </SectionContentLayout>
    </section>
  )
}