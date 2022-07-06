import React, { useState, useEffect } from "react";
import "./Alert.css";
import { Toast } from "react-bootstrap";

function Alert({ color, message }) {

const [show, setShow] = useState(false)
useEffect(() => {
  setShow(true)
  
}, [])

setTimeout(() => {
    setShow(false)
}, 4000);
console.log('here')

  return (
    <div className={show ? "alert__card show__card": 'alert__card hide__card'}>
      {message && (
        <Toast show = {show} onClose = {() => {setShow(false)}}>
          <Toast.Header>
            <span
              className={color ? "box bg-" + color : "box bg-primary"}
            ></span>
            <strong className="me-auto">Alert!</strong>
            {/* <small>11 mins ago</small> */}
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      )}
    </div>
  );
}

export default Alert;
