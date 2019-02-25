import React, { Component } from 'react';
// import itemImages from '../assets/images';
// import blueberryImg from '../assets/images/blueberries.jpg'

class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            likes: 0,
            onSale: false
        }
    }

    
    render() {
        // console.log(this.props)
        const imageURL = `assets/images/${this.props.item.filenameString}`

        // console.log(itemImages)
        return (
            <div className="card">
                <div className="card-img">
                    <img src={imageURL} alt=""/>
                </div>
            </div>
        )
    }
}

export default Card;