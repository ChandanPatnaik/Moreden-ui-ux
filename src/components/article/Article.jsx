import React from 'react'
import "./article.css"
const Article = ( {imgUrl, date, title} ) => {
    return (
        <div className='gpt3__blog__container__article'>
            <div className='gpt3__blog__container__article__image'>
                <img src={imgUrl} alt='blog img' />
            </div>
            <div className='gpt3__blog__container__article__content'>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article
