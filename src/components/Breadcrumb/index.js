//styles
import { Wrapper, Content } from "./Breadcrumb.styles";
import PropTypes from 'prop-types';


import { Link } from "react-router-dom";

const Breadcrumb = ({movieTitle}) => (

    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>


        </Content>
    </Wrapper>
);

Breadcrumb.propTypes = {
    movieTitle: PropTypes.string
}

export default Breadcrumb;