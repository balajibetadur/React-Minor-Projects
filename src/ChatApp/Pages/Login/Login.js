import React, { useState } from 'react'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import './Login.css'
import { auth, google } from '../../../firebase'
import { signInWithPopup, signOut } from 'firebase/auth'

function Login() {

    const clientId = '64743672817-p3ilg52d45q1fgncfipb5p1o9golret3.apps.googleusercontent.com'

    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [error, setError] = useState(false)

    const [user, setUser] = useState({
        'email  ': '',
        'password': ''
    })
    const [newUser, setNewUser] = useState({
        'userName': '',
        'email': '',
        'password': '',
        'confirmPassword': ''
    })
    const [login, setLogin] = useState(true)
    function handleClick(){
        setShow(!show)

    }
    function handleClick2(){
        setShow2(!show2)

    }

    function handleSignUp(){
        if (newUser.userName === '' || newUser.email === '' || newUser.password === '' || newUser.confirmPassword === ''){
            setError(true)
        }else{
            setError(false)            
        }
    }
    
    function handleLogin(){
        if (user.email === '' || user.password === ''){
            setError(true)
        }else{
            setError(false)            
        }

    }


    const newLogin = async (provider) => {
        const result = await signInWithPopup(auth, provider)
        console.log(result)
        
    }

    const newLogout = async () => {
        const result = await signOut(auth)
        console.log(result)
    }
    
    const handleImageUplaod = (e) => {
        let file = e.target.files[0].name
        let el = document.getElementById('upload__image__text')
        el.innerText = file
        el.style.color = 'black'
    }

  return (
    <div className='join'>
       <div className="container">
           
            <video 
            className='bg-img-video'
            src='share.mp4'
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay/>


            <div className="backdrop"></div>
            <div className="content">
                {login ? 
                    <div className="login__container">

                        <header className='join__header'>LOGIN PAGE</header>

                        <div className="feild">
                            <span className='logo'><PersonRoundedIcon/></span>
                            <input value = {user.email} onChange={(e) => {setUser({...user, [e.target.name]: e.target.value})}} name='email'  type="text" placeholder='Enter Email' required/>
                        </div>

                        <div className="feild">
                            <span className='logo'><HttpsRoundedIcon/></span>
                            <input value = {user.password} onChange={(e) => {setUser({...user, [e.target.name]: e.target.value})}} name='password'  type={show ? 'text' : 'password'} placeholder='Enter Password' required/>
                            
                                {show ? <span onMouseDown= {() => {handleClick()}} onMouseUp = {() => {handleClick()}} className='logo show'><VisibilityRoundedIcon/></span> :
                                <span onMouseDown= {() => {handleClick()}} onMouseUp = {() => {handleClick()}} className='logo hide'><VisibilityOffRoundedIcon/></span>}
                        </div>

                        <div className="pass">
                            <a href="">Forgot Password? I know!</a>
                        </div>

                        {
                            error && <div className="confirm">
                                        <span className='text-danger'>Please fill all feilds</span> 
                                    </div> 
                        }
                        <div>
                            <input onClick = {handleLogin} className='submit__button' type="submit" value = 'LOGIN'/>
                        </div>
                        
                        <div onClick={() => {newLogin(google)}} className="feild auth">

                            <span  className='logo'><GoogleIcon/>  Login with Google</span>
                            
                        
                        </div>
                        


                        <div className="switch">
                            <a onClick={() => {setLogin(false)}} >Dont have an account? SignUp</a>
                        </div>

                    </div>
                    :
                    <div className="signup__container">

                        <header className='join__header'>SIGN UP PAGE</header>

                        <div className="feild">
                            <span className='logo'><PersonRoundedIcon/></span>
                            <input value = {newUser.userName} onChange={(e) => {setNewUser({...newUser, [e.target.name]: e.target.value})}} name='userName'  type="text" placeholder='Enter Username' required/>
                        </div>

                        <div className="feild">
                            <span className='logo'><EmailIcon/></span>
                            <input value = {newUser.email} onChange={(e) => {setNewUser({...newUser, [e.target.name]: e.target.value})}} name='email'  type="text" placeholder='Enter Email' required/>
                        </div>

                        <div className="feild">
                            <span className='logo'><HttpsRoundedIcon/></span>
                            <input value = {newUser.password} onChange={(e) => {setNewUser({...newUser, [e.target.name]: e.target.value})}} name='password'  type={show ? 'text' : 'password'} placeholder='Enter Password' required/>
                            
                                {show ? <span onMouseDown= {() => {handleClick()}} onMouseUp = {() => {handleClick()}} className='logo show'><VisibilityRoundedIcon/></span> :
                                <span onMouseDown= {() => {handleClick()}} onMouseUp = {() => {handleClick()}} className='logo hide'><VisibilityOffRoundedIcon/></span>}
                            
                            
                        </div>

                        <div className="feild">
                            <span className='logo'><HttpsRoundedIcon/></span>
                            <input value = {newUser.confirmPassword} onChange={(e) => {setNewUser({...newUser, [e.target.name]: e.target.value})}} name='confirmPassword'  type={show2 ? 'text' : 'password'} placeholder='Confirm Password' required/>
                            
                                {show2 ? <span onMouseDown= {() => {handleClick2()}} onMouseUp = {() => {handleClick2()}} className='logo show'><VisibilityRoundedIcon/></span> :
                                <span onMouseDown= {() => {handleClick2()}} onMouseUp = {() => {handleClick2()}} className='logo hide'><VisibilityOffRoundedIcon/></span>}
                        </div>

                        <div onClick={() => document.getElementById('image__upload__input').click()} className="feild upload__image">
                            
                                <span  className='logo'><AddPhotoAlternateIcon/></span>
                                <p className="upload__image__text" id='upload__image__text'>Upload Profile Picture</p>
                            <input onChange={(e) => handleImageUplaod(e)} type="file" className='image__upload__input' id='image__upload__input' accept='omage/png, image/jpeg' hidden/>
                             </div>

                        {
                            (newUser.password !== '' && newUser.password !== newUser.confirmPassword) ? 
                                <div className="confirm">
                                    <span className='text-danger'>Pasword Not Matching</span> 
                                </div>     : ''
                        }
                        {
                            error && <div className="confirm">
                                        <span className='text-danger'>Please fill all feilds</span> 
                                    </div> 
                        }
                        
                        <div>
                            <input onClick = {handleSignUp} className='submit__button' type="submit" value = 'SIGN UP'/>
                        </div>

                        <div className="pass switch">
                            <a onClick={() => {setLogin(true)}} >Already have an account? Login</a>
                        </div>

                    </div>    
                }
            </div>
        </div>
    </div>
  )
}

export default Login