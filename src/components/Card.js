import React, { Component } from "react";
import LikeBadge from "./LikeBadge";
import SaleBadge from "./SaleBadge";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0
    };

    // This is one way to bind the event handler to this context
    // We don't really use it at work, but I see it a lot in various packages
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  // Another way to define this would be using a babel class property, which
  // automatically binds it to this if you use an arrow function, which means you don't need
  // the line in the constructor. This is mostly what we use, but up to team preference

  // onButtonClick = event => {
  onButtonClick(event) {
    const likes = this.state.likes + 1;
    this.setState({ likes });
  }

  render() {
    // We usually destructure at the top because you can easily figure out
    // what you're working with, and it keeps the markup tidy
    const { item } = this.props;
    const { filenameString, tag, title, onSale } = item;
    // Or this, whatever you consider more readable
    // const {
    //   item: { filenameString, tag, title, onSale }
    // } = this.props;
    const { likes } = this.state;
    const imageURL = `assets/images/${filenameString}`;

    return (
      <div className="card">
        <SaleBadge onSale={onSale} />
        <div className="card-img">
          <img src={imageURL} alt="" />
        </div>
        <div className="card-details">
          <p className="card-item-tag">{tag}</p>
          <p className="card-item-name">{title}</p>
          {/* If you use an anonymous function like (event) => this.handleClick(event),
            it does bind to this context, but it also creates a new anonymous
            function every time react renders the component, which could potentially
            be a lot depending on the app. Instead, since you already have a bound function
            defined that has the same shape as what the event handler is expecting, you can just reference it
            
            I've heard it's not a problem because the garbage collection has gotten pretty good,
            but I still try to avoid it if I can
            (sometimes I can't, like if I need to close over some renderProp or something)
            */}
          <button className="card-item-like-btn" onClick={this.onButtonClick}>
            <LikeBadge likes={likes} />
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
