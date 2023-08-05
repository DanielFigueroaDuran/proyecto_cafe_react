import React from 'react'

const Button = ({ type, label, className, handleClick }) => {
    return (
        <button className={className} type={type} onClick={handleClick}>{label}</button>
    )
}

export default Button