//styles
import { Wrapper, Content } from "./Grid.styles";

const Grid = ({ header, children }) => ( //children: default prop in React

    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>

);

export default Grid;