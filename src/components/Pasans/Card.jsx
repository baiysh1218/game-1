import React from "react";

const Card = props => {
  const { value, suit, isFaceUp } = props;

  const getCardColor = () => {
    return suit === "hearts" || suit === "diamonds" ? "red" : "black";
  };

  return (
    <div className={`card ${isFaceUp ? "face-up" : ""}`}>
      <div className="value">{value}</div>
      <div className="suit" style={{ color: getCardColor() }}>
        {suit}
      </div>
    </div>
  );
};

export default Card;
