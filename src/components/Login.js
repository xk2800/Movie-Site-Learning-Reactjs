import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; //used to navigate programmatically in the application
import API from '../API';

//Component
import Button from './Button';

//styles
import { Wrapper } from './Login.styles';

//context
import { Context } from '../context';


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [setUser] = useContext(Context); // add _ bcs user won't be used
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setError(false);
        try {

            const requestToken = await API.getRequestToken(); //to get requestToken
            const sessionId = await API.authenticate( //to get sessionId
                requestToken,
                username,
                password
            );

            console.log(sessionId);

            setUser({ sessionId: sessionId.session_id /*return from API */, username });

            navigate('/');


        } catch (error) {
            setError(true);
        }
    };

    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === 'username') setUsername(value);
        if (name === 'password') setPassword(value);
    };

    return (
        <Wrapper>
            {error && <div className="error">There was an error.</div>}
            <label>Username:</label>
            <input
                type="text"
                value={username}
                name="username"
                onChange={handleInput}
            />
            <input
                type="password"
                value={password}
                name="password"
                onChange={handleInput}
            />
            <Button text="Login" callback={handleSubmit} />
        </Wrapper>
    );
};

export default Login;