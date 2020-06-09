import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/rooms2.jpg'
import PropTypes from 'prop-types'

function Room({room}) {
    const {schoolname, slug, images, schoolfees} = room
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single room" />
                <div className="price-top">
                    <h6>₦{schoolfees<1000 ? schoolfees+'k' : schoolfees+'000'}</h6>
                    <p>per session</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">Featured</Link>
            </div>
    <p className="room-info">{schoolname}</p>
        </article>
    )
}

export default Room

Room.propTypes = {
    room: PropTypes.shape({
        schoolname:PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        schoolfees: PropTypes.number.isRequired


    })
}