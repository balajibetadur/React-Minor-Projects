import React, { useState } from 'react'
import './Join.css'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import { Link } from 'react-router-dom'

let userName = ''
function Join() {

    const [show, setShow] = useState(false)
    const [user, setUser] = useState({
        'userName': '',
        'password': ''
    })

    function handleClick(){
        setShow(!show)

    }
    function handleSubmit(e){
        userName = user.userName
        if (user.userName === '' || user.password === ''){
            e.preventDefault();
            
        }
    }
   

  return (
    <div className='join'>
       <div className="container">
            {/* {alert  && <Alert color = {'danger'} message = {alert}/>} */}
           
            <video 
            className='bg-img-video'
            src='share.mp4'
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay/>
            <div className="content">
                <header className='join__header'>LOGIN PAGE</header>
                    <div className="feild">
                        <span className='logo'><PersonRoundedIcon/></span>
                        <input onChange={(e) => {setUser({...user, [e.target.name]: e.target.value})}} name='userName'  type="text" placeholder='Enter Username' required/>
                    </div>
                    <div className="feild">
                        <span className='logo'><HttpsRoundedIcon/></span>
                        <input onChange={(e) => {setUser({...user, [e.target.name]: e.target.value})}} name='password'  type={show ? 'text' : 'password'} placeholder='Enter Password' required/>
                        
                            {show ? <span onMouseDown= {() => {handleClick()}} onMouseUp = {() => {handleClick()}} className='logo show'><VisibilityRoundedIcon/></span> :
                            <span onMouseDown= {() => {handleClick()}} onMouseUp = {() => {handleClick()}} className='logo hide'><VisibilityOffRoundedIcon/></span>}
                        
                        
                    </div>
                    <div className="pass">
                        <a href="">Forgot Password? I know!</a>
                    </div>
                    <div>
                        <Link to='/chat'><input onClick = {(e) => {handleSubmit(e)}} className='submit__button' type="submit" value = 'LOGIN'/></Link>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Join
export { userName }