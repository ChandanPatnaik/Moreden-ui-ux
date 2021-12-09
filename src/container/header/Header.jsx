import React from 'react'
import "./header.css"
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="Home">
            <div className="gpt3__header__content">
                <h1 className="gradient__text">
                    Let's Build Something amazing with GPT3 OpenAI
                </h1>
                <p>Bridging the digital divide through AI, machine learning, and other emerging technologies will help all Americans benefit from the digital revolution, regardless of who they are or where they live. That is something every citizen can appreciate.</p>
                <div className="gpt3__header__content__input">
                    <input type="email" placeholder="Your Email Address"/>
                    <button type="button">Get Started</button>
                </div>
                <div className="gpt3__header__content__people">
                    <img src={people} alt="people" />
                    <p>1800 people requested access a visit in last 24 hours</p>
                </div> 
            </div>
             <div className="gpt3__header__image">
              <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header
