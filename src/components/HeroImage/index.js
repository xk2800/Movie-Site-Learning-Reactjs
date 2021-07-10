//styles 
import { Wrapper, Content, Text } from "./HeroImage.styles";

const HeroImage = ({ image, title, text /*THIS IS PROP */ }) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

export default HeroImage;

