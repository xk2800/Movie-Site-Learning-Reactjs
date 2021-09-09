import { Link } from 'react-router-dom';

//styles
import { Wrapper, Content } from "./Footer.styles";

export default function index() {
    return (
        <Wrapper >
            <Content>
                <div>React Movie &#169; 2021</div>
                <div>Content's Provided by <Link to="https://www.themoviedb.org/" id="link">The Movie DB</Link></div>
            </Content>
        </Wrapper>
    );
}
