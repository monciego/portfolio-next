import Image from "next/legacy/image";
import React from 'react';
import imageOne from '../public/images/about/about-image-1.jpg';
import imageTwo from '../public/images/about/about-image-2.jpg';
import imageThree from '../public/images/about/about-image-3.jpg';
import { AboutImageContainer, ImageWrapper } from '../styles/About.styled';

export interface IAboutImageProps {}

export const AboutImage: React.FunctionComponent<IAboutImageProps> = () => {
  return (
    <AboutImageContainer>
      <ImageWrapper down>
        <Image
          src={imageTwo}
          alt="Jericho Bantiquete"
          sizes="80vw"
          layout="fill"
          objectFit="cover"
          priority={false}
        />{' '}
      </ImageWrapper>
      <ImageWrapper>
        <Image
          src={imageOne}
          alt="Jericho Bantiquete"
          sizes="80vw"
          layout="fill"
          objectFit="cover"
          priority={false}
        />{' '}
      </ImageWrapper>
      <ImageWrapper down>
        <Image
          src={imageThree}
          alt="Jericho Bantiquete"
          sizes="80vw"
          layout="fill"
          objectFit="cover"
          priority={false}
        />{' '}
      </ImageWrapper>
    </AboutImageContainer>
  );
};
