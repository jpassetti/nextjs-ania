import Slide from '../Slide';

const TitleSlide = ({ title, subtitle }) => (
  <Slide>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Slide>
);

const Title = ({ children }) => <h1>{children}</h1>;

const Subtitle = ({ children }) => <h2>{children}</h2>;

export default TitleSlide;