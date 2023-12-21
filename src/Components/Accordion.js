import React from 'react'
import data from './data'
import { useState } from 'react';
import './Accordion.css'
// import SignUpScreen from '../screens/SignUpScreen';

function Accordion() {

    const [selected, setSelected] = useState(null);
    // const [email, setEmail] = useState("");
    // const [signIn, setSignIn] = useState(false);

  const handleSingleSelection = (getCurrentId) => {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  return (
    <div className="dropdown">
        <h2>Frequently Asked Questions</h2>
      <div className="wrapper">
      <div className="accordion">
        {
          data && data.length > 0 ? 
          data.map(dataItem => <div className='item'>
            <div onClick={() => handleSingleSelection(dataItem.id)} className='title'>
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
            {
              selected === dataItem.id ?
              <div className='content'>{dataItem.answer}</div>
              : null
            }
          </div>)
          : <div>No data found!</div>
        }
      </div>
      </div>
      {/* <div className="ok">
          {signIn ? (
            <SignUpScreen />
          ) : ( */}
            <>
              {/* <h5>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h5> */}

              {/* <div className="loginScreen_input"> */}
                {/* <form> */}
                  {/* <div className="inputdata"> */}
                    {/* <input type="email" placeholder="Email address" name="email" */}
                    {/* <input
                      type="email"
                      name="email"
                      className={email ? "has-content" : ""}
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      autoComplete="off"
                      required
                    /> */}
                    {/* <label htmlFor="email">Email address</label> */}
                  {/* </div> */}
                  {/* <button
                    onClick={() => {
                      setEmail("");
                      setSignIn(true);
                    }}
                    className="login_getstarted"
                  >
                    Get Started {">"}
                  </button> */}
                {/* </form> */}
              {/* </div> */}
            </>
          {/* )} */}
        {/* </div> */}
     </div>
  )
}

export default Accordion
