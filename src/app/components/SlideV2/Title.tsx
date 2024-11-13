// components/SlideV2/Title.tsx
import React from 'react';
import styles from './subcomponents.module.scss';

interface TitleProps {
  title: string; // Specify that the 'title' prop is a string
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1 className={styles.the_title}>
      {title}
    </h1>
  );
};

export default Title;