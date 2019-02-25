import React, { Component } from 'react';
import LikeBadge from './LikeBadge'
import SaleBadge from './SaleBadge'

class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            likes: 0
        }

        this.onButtonClick = this.onButtonClick.bind(this)
    }

    onButtonClick(event) {
        const likes = this.state.likes + 1
        this.setState({likes})
    }

    render() {
        const imageURL = `assets/images/${this.props.item.filenameString}`

        return (
            <div className="card">
                <SaleBadge onSale={this.props.item.onSale}/>
                <div className="card-img">
                    <img src={imageURL} alt=""/>
                </div>
                <div className="card-details">
                    <p className="card-item-tag">{this.props.item.tag}</p>
                    <p className="card-item-name">{this.props.item.title}</p>
                    <button className="card-item-like-btn" onClick={event => this.onButtonClick(event)}>
                        <LikeBadge 
                            likes={this.state.likes}
                        />

                    </button>
                </div>
            </div>
        )
    }
}

export default Card;