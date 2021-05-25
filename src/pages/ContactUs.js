import React from 'react';
import styled from 'styled-components';

const ContactUs = () => {
    return (
        <ContactStyle
        style={{background:"#fff"}}>
            <Title>
                <Hide>
                    <h2>Get in touch...</h2>
                </Hide>
            </Title>
            <div>
                <Social>
                    <Circle/>
                    <h2>Mail Us at: xxxxxxxx@gmail.com</h2>
                </Social>
                <Social>
                    <Circle/>
                    <h2>Call Us at: XXXXXXXXXX</h2>
                </Social>  
                <Social>
                    <Circle/>
                    <h2>Meet Us at: XXXX-XXXX</h2>
                </Social>                 
            </div>
        </ContactStyle>
        
    );
};

const ContactStyle = styled.div`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 79vh;
`;
const Title = styled.div`
    padding: 2rem;
    color: black;
`;
const Hide = styled.div`
    overflow: hidden;
`;
const Circle = styled.div`
    border-radius: 50%;
    width:2rem;
    height: 2rem;
    background: #353535;
`;
const Social = styled.div`
    display: flex;
    align-items: center;
    h2{
        margin:.5rem;
        font-size: 2rem;
    }
`;


export default ContactUs;
