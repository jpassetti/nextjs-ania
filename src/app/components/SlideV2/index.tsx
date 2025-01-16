// components/Slide.tsx
import React from 'react';
import classnames from 'classnames/bind';

import styles from './slide.module.scss';

const cx = classnames.bind(styles);

// Slide component definition
interface SlideProps {
  type: 'titleSlide' | 'photo' | 'video' | 'infographic' | 'audio' | 'quote' | 'spacer' | 'bannerImage' | 'title' | 'textOnly';
  children: React.ReactNode;
  width?: 'small' | 'medium' | 'large' | 'xlarge' ;
}

const Slide: React.FC<SlideProps> = ({ type, children, width }) => {
  const slideClasses = cx({
    slide: true,
    [type]: true,
    [`spacer--${width}`]: type === 'spacer',
  });
  return (
    <div className={slideClasses}>
      {children}
    </div>
  );
};

export default Slide;