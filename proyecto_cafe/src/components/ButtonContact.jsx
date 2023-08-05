import React from 'react'

const ButtonContact = ({ className, classnumber, img, paragraph }) => {
    return (
        <div className={className}>
            <img src={img} alt="" />
            <p classnumber={classnumber}>{paragraph}</p>
        </div>
    )
}

export default ButtonContact