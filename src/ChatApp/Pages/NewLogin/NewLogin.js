import React from "react";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import "./NewLogin.css";
import { auth, google } from '../../../firebase'
import { signInWithPopup } from 'firebase/auth'

function NewLogin() {


  const handleGoogleLogin = async (provider) => {
    const result = await signInWithPopup(auth, provider)
    console.log(result)
  }
  


  return (
    <div className="new__login">

    <video 
        className = 'login__video'
        src="share.mp4"
        type="video/mp4"
        loop
        controls = {false}
        muted
        autoPlay
    />

    <div className="login__backdrop">
        
    </div>

      <div className="login__content">
        <div className="input__feild">
          <span className="icon"><PersonRoundedIcon/></span>
          <input type="text" placeholder="Enter Email" />
        </div>
        <div className="input__feild">
          <span className="icon"><LockRoundedIcon/></span>
          <input type="password" placeholder="Enter Password" />
        </div>
        <div className="submit">
          <input type="submit" value = 'LOGIN' />
        </div>
        <div onClick={() => {handleGoogleLogin(google)}} className="submit__google">
          <input type="submit" value = 'LOGIN WITH GOOGLE' />
        </div>
        </div>
    </div>
  );
}

export default NewLogin;
