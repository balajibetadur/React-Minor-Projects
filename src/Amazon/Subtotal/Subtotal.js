import React from "react";
import "./Subtotal.css";

function Subtotal() {
  return (
    <div className="subtotal">
      <div className="subtotal__header">
        <div className="subtotal__amount">
          Subtotal (0 items): $<strong>0</strong>
        </div>
        <button className="subtotal__button">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Subtotal;
