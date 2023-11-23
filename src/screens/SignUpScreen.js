import React, {useState, useRef} from 'react';
import {auth} from '../firebase';
import './SignUpScreen.css';

function SignUpScreen() {
  const [signUp, setSignUp] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) =>{
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authuser) => {
      // console.log(authuser);
    }).catch(error => {
      alert(error.message);
    });
    setSignUp(false);
  } 
  const signIn =(e) =>{
    e.preventDefault();
    
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authuser) => {
      // console.log(authuser);
    }).catch(error => {
      alert(error.message);
    });
  }


  return (
    <div className='signUpScreen'>
       {signUp ? (
        <form>
          <h1>Sign Up</h1>
          <input ref={emailRef} placeholder="Email" type="email" />
          <input ref={passwordRef} placeholder="Password" type="password" />
          <button type="submit" onClick={register}>
            Sign Up
          </button>

          <span className='signUp_gray'>Already have account ?<span className='signUp_link' onClick={() => setSignUp(false)}>  Sign in Now.</span></span>
          <span className="signUp_privacyLine">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.<a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer"> Learn more.</a>
          </span>
        </form>
      ) : (
        <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type='email'/>
        <input ref={passwordRef} placeholder='Password' type='password' />
        <button type='submit' onClick={signIn}>Sign In</button>

        <span className='signUp_gray'>New to Netflix?<span className='signUp_link' onClick={() => setSignUp(true)}> Sign up now.</span></span>
        <span className='signUp_privacyLine'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<a href='https://policies.google.com/privacy' target="_blank" rel="noreferrer"> Learn more.</a></span>
      </form>
      )}
    </div>
  )
}

export default SignUpScreen
