import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logo from '../img/logo.png';

const Nav = () => {
    return(
        <StyledNav>  
            <h1><Link id="logo" to="/">Capture</Link></h1>    
            <ul>
                <li>
                    <Link to="/">About Us</Link>
                </li>
                <li>
                    <Link to="/work">Our Work</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display:flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;

    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo{
        font-size: 1.8rem;
        font-weight: lighter;
        font-family: cursive;
    }
    li{
        padding-left: 2rem;
        position: relative;
    }
`;

export default Nav;