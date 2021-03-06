import React, {useState} from 'react';
import styled from 'styled-components';
import {About} from '../styles';


const FaqSection = () => {
    const [faqToggle, setFaqToggle] = useState(false);
    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div onClick={() => setFaqToggle(!faqToggle)} className="questions">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                {faqToggle && (
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, temporibus.</p>
                )}
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="questions">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                {faqToggle && (
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, temporibus.</p>
                )}                
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="questions">
                <h4>Payments Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                {faqToggle && (
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, temporibus.</p>
                )}                
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="questions">
                <h4>Products We Offer</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                {faqToggle && (
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, temporibus.</p>
                )}                
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    );
};

const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .questions{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;
