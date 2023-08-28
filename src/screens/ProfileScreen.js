import React from 'react'
import './ProfileScreen.css'
import { useSelector } from "react-redux";
import Nav from "../Components/Nav";
import { selectUser } from "../features/userSlice";
import avatar from '../image/netflix-avatar.jpg';
import { auth } from "../firebase";
import { useNavigate} from 'react-router';

function ProfileScreen() {
  const user  = useSelector(selectUser);
  const navigate = useNavigate();

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const  removeProfile = () => {
    navigate('/');
    auth.signOut();
  };
  
  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen_body'>
          <h1>Edit Profile</h1>
          <div className='profileScreen_info'>
            <img src={avatar} alt=''/>
            <div className='profileScreen_details'>
              <h2>{user.email}</h2>


              <div className='profileScreen_plans'>
                <h3>Plans (Current Plan: Basic)</h3>
                {/* <h5>Renewal date: {new Date().toLocaleString()}</h5> */}
                <h5>Renewal date: {date}</h5>

                <div className='plan_row'>
                <div className='row_item'>
                <h2>Netflix Premium</h2>
                <h6>4K (Ultra HD) + HDR</h6>
                  </div>
                  <button className='plan_btn'>Subscribe</button>
                </div>


                <div className='plan_row'>
                  <div className='row_item'>
                  <h2>Netflix Standard</h2>
                  <h6>1080p (Full HD)</h6>
                  </div>
                  <button className='plan_btn'>Subscribe</button>
                </div>


                <div className='plan_row'>
                <div className='row_item'>
                <h2>Netflix Basic</h2>
                  <h6>720p (HD)</h6>
                  </div>
                  <button className='current_btn'>Current Package</button>
                </div>


                <div className='plan_row'>
                <div className='row_item'>
                <h2>Netflix Mobile</h2>
                  <h6>480p</h6>
                  </div>
                  <button className='plan_btn'>Subscribe</button>
                </div>
                <button onClick={() => removeProfile()} className='profileScreen_signOut'>Sign Out</button>
              </div>



            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileScreen
