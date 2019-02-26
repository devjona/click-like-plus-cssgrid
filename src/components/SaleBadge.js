import React from "react";

// Same deal, etc, etc
// const SaleBadge = ({ onSale }) =>
//   onSale && (
//     <div className="on-sale">
//       <p>Sale</p>
//     </div>
//   );

const SaleBadge = props => {
  if (props.onSale) {
    return (
      <div className="on-sale">
        <p>Sale</p>
      </div>
    );
  } else {
    return null;
  }
};

export default SaleBadge;
