import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterStyle>
          <a>Copyright@mysite 2021</a>
          <a>Designed by Prashant</a>  
        </FooterStyle>
    );
};

const FooterStyle = styled.div`
    min-height: 10vh;
    display:flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    a{
        color: white;
        text-decoration: none;
    }
`;

export default Footer;
