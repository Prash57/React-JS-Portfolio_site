import React from 'react';
import styled from 'styled-components';


const Login = () => {
    return (
        <LoginStyle>
        <form>
            <div className="inputfield">
            <input type="text" placeholder="your name" />
            <input type="password" placeholder="password" />
            </div>
            <button type="submit">Login</button>
        </form>            
        </LoginStyle>
    );
}

export default Login;


const LoginStyle = styled.div`
    padding: 5rem 10rem;
    min-height: 79vh;
`;
