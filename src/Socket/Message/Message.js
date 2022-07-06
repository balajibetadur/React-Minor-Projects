import React from 'react'
import './Message.css'
function Message({message, textClass, userName}) {
  return (
    <div className={textClass}>
      <div className="messageBox">
        
      <span className="userName">{userName}</span>
        <p className="text">{message}</p>
      </div>
    </div>
  )
}

export default Message