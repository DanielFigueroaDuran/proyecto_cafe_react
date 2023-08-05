import React from 'react'

const CardCondicionesComponente = ({ img, title, paragraph }) => {
    return (
        <div className='card'>
            <div className="illustration">
                <img src={img} alt="illustration" />
            </div>
            <h3>{title}</h3>
            <p className='paragraph-color'>{paragraph}</p>
        </div>
    )
}

export default CardCondicionesComponente