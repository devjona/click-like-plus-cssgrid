import React from 'react'

const SaleBadge = (props) => {

    if (props.onSale) {
        return (
            <div className="on-sale">
                <p>Sale</p>
            </div>
            )
    } else {
        return null
    }
}

export default SaleBadge