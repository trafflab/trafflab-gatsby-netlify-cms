import React from 'react';
import * as styles from './media-gatsby-image.module.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import { Is480Context } from '../../../utils/contexts';

export default function MediaGatsbyImage({ image_480=false, image, alt }) {
  // const is480 = React.useContext(Is480Context);

  const handledImg = getImage(image) || image;
  const handledImg_480 = getImage(image_480) || image_480;
  return (
    (handledImg?.layout || handledImg_480?.layout) ? (
      <GatsbyImage
        image={handledImg}
        // image={is480 ? handledImg_480 : handledImg}
        objectFit="fill"
        objectPosition={'center'}
        style={{width: "100%", height:"100%"}}
        alt={alt}
        formats={["auto", "webp", "avif"]}
      />
    ) : (
      <picture>
        <source media='(max-width: 480px)' srcSet={handledImg_480} />
        <img src={handledImg} alt={alt} style={{width: "100%", height:"100%"}}  />
      </picture>
    )
  )
}