import styles from './subcomponents.module.scss';

interface TextOnlyProps {
  text?: string;
}

const TextOnly: React.FC<TextOnlyProps> = ({ text }) => {
  return <div className={styles.textOnly_container}>{text}</div>;
};

export default TextOnly;