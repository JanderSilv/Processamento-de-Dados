// styles
import { Container, Image, Text, Title, Subtitle } from "./styles";

// types
import { CardProps } from "./types";

function Card(props: CardProps) {
  const { color, banner, title, subtitle, onClick } = props;

  return (
    <Container color={color} onClick={onClick}>
      <Image src={banner?.src} alt="banner" />

      <Text>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Text>
    </Container>
  );
}

export { Card };
