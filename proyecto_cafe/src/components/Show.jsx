import React from 'react'
import { Link } from 'react-router-dom'

const Show = ({ className, link, label, icon, classIcon }) => {
    return (
        <div className={className}>
            <Link to={link}>{label}</Link>
            <img className={classIcon} src={icon} alt="Arrow" />
        </div >
    )
}

export default Show