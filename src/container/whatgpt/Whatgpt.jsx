import React from 'react'
import Feature from '../../components/feature/Feature'
import "./whatgpt.css"
const Whatgpt = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin " id="WhatisGPT3">
            <div className="gpt3__whatgpt3__feature">
                <Feature />
            </div>
            <div className="gpt3__whatgpt3__heading">
                <h1 className="gradient__text">
                    The Possibillities are beyond your imagination
                </h1>
                <p>Explore The Library</p>
            </div>
                <div className="gpt3__whatgpt3__container">
                    <Feature />
                    <Feature />
                    <Feature />
                </div>
        </div>
    )
}

export default Whatgpt
