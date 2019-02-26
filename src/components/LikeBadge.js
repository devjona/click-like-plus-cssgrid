import React from "react";

// Same deal as the other file, just a different syntax
// const LikeBadge = ({ likes }) =>
//   likes > 0 && <span className="like-badge">{likes}</span>;

const LikeBadge = props => {
  if (props.likes > 0) {
    return <span className="like-badge">{props.likes}</span>;
  } else {
    return null;
  }
};

export default LikeBadge;
