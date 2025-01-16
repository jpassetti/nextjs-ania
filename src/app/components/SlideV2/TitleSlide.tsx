import styles from './subcomponents.module.scss';

const TitleSlide = ({projectTitle, image, width, height}) => {
  return (
    <div className={styles.the_title_slide} style={{
      backgroundImage: `url(${image})`,
    }}>
      <div className={styles.the_title_slide__text}>
      <h1>{projectTitle}</h1>
      <p>scroll right to read story</p>
      </div>
      
    </div>
  );
}
export default TitleSlide;