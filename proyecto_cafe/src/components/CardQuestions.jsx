import React from 'react'

const CardQuestions = ({ className, title, img, paragraph }) => {
    return (
        <div className='text'>
            <div className='chevron'>
                <h3 className='title-faq'>{title}</h3>
                <img
                    className="iconpico"
                    src={img}
                    alt="Iconpico"
                />
            </div>
            <div className={className}></div>
            <div>
                <p className='paragraph-faq'>{paragraph}</p>
            </div>
        </div>

    )
}

export default CardQuestions