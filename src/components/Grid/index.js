//styles
import { Wrapper, Content } from "./Grid.styles";
import PropTypes from 'prop-types';


const Grid = ({ header, children }) => ( //children: default prop in React

    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>

);

Grid.propTypes = {
    header: PropTypes.string
}

export default Grid;