import React from "react";
import './Subtotal.css'

function Subtotal() {
  return (
    <div className="subtotal">
      <div className="subtotal__amount">
        Subtotal (0 items): $<strong>0</strong>
      </div>
      <button>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
