import React from 'react'

const LikeBadge = (props) => {

    if (props.likes > 0) {
        return (
            <span className="like-badge">{props.likes}</span>
            )
    } else {
        return null
    }
}

export default LikeBadge