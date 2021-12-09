import React from 'react'
import Feature from '../../components/feature/Feature'
import "./whatgpt.css"
const Whatgpt = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin " id="wgpt3">
            <div className="gpt3__whatgpt3__feature">
                <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
            </div>
            <div className="gpt3__whatgpt3__heading">
                <h1 className="gradient__text">
                    The Possibillities are beyond your imagination
                </h1>
                <p>Explore The Library</p>
            </div>
                <div className="gpt3__whatgpt3__container">
                    <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
                    <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments " />
                    <Feature title="Eduacation" text="Lot's of resource available to learn new things and develop incrediable projects "/>
                </div>
        </div>
    )
}

export default Whatgpt
