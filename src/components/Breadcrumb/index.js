//styles
import { Wrapper, Content } from "./Breadcrumb.styles";

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

export default Breadcrumb;