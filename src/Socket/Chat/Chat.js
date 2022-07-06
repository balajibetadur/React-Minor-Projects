import React, { useEffect, useState } from 'react'
import { userName } from '../Join/Join'
import './Chat.css'
import socketIo from 'socket.io-client'
import Message from '../Message/Message'

const ENDPOINT = 'http://localhost:4500/'

let socket;
function Chat() {
  
  const [messages, setMessages] = useState([1,2,5,5,5,5,5,8])
  const [currId, setId] = useState('')
  const [showScroll, setShowScroll] = useState(false)
  

  const send = () => {
    let message = document.getElementById('chat__input').value
    socket.emit('message', {message: message, id: currId})
    document.getElementById('chat__input').value = ''
  }
  
  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ['websocket'] });
    socket.on('connect', () => {
      // alert(userName, 'connected')
      console.log(userName, 'Connected', socket.id)
      setId(socket.id)
    })
  
    socket.emit('joined', { user: userName })
    socket.on('welcome', (data) => {
    })
    socket.on('userJoined', (data) => {
      setMessages([...messages, data])
      // console.log(data.user, data.message)
    })
    socket.on('userLeft', (data) => {
      setMessages([...messages, data])
      console.log(data.user, data.messsage)
    })

    return () => {
      socket.emit('disconnect')
      socket.off()
      
    }
  }, [])



  const scrollDown = () => {
    console.log('here')
    let element = document.getElementById('chatBox')
    element.scrollTop = element.scrollHeight 

  }
  
  useEffect(() => {
    
    socket.on('sendMessage', (data) => {
      // console.log(data)
      setMessages([...messages, data])
    })
    
  
    
      let element = document.getElementById('chatBox')
      element.scrollTop = element.scrollHeight 

    
      element.addEventListener('scroll', function(event)
    {
      var element = event.target;
      // console.log((element.scrollHeight < (element.scrollTop + element.clientHeight + 10)))
      if (element.scrollHeight < (element.scrollTop + element.clientHeight + 10))
        
        {
            setShowScroll(false)
          }
          else{
          setShowScroll(true)

        }
    });
    return () => {
      socket.off()
    }
  }, [messages])

  let textClass = ''


  return (
    <div className='chat'>
      <div className="chat__list">CHATS</div>
      <div className="active__chat">
        <div className="header"></div>
        <div className="chatBox" id="chatBox">
          <div className="messages">
          {messages.map((message, index) => {
            message.user === 'Admin'? textClass = 'middle': message.id === currId? textClass = 'self__message': textClass = 'other_message'
            return <Message key = {index} message = {message.message} textClass = {textClass} userName = {message.id === currId ? 'You': message.user} /> 
          })}
          </div>
          {showScroll && <button onClick = {scrollDown} className="scroll">v</button>}
        </div>
        <div className="inputBox">
          <input type="text" className="chat__input" id='chat__input' />
          <button onClick={send} className="send">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Chat