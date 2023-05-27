import React from 'react';
import { Link } from 'react-router-dom';


const Profile = ({avatar, firstname, lastname, email}) => {
  
  return (
    <div className="profile">
      <div className="upper-container">
        <div className="image-container">
          <img src= {avatar} alt="" className="img " />
        </div>
      </div>
      <div className="lower-container ">
        <h3 className="items-start">
          <span>'First Name':</span> {firstname}
        </h3>
        <h3>
          <span>'Last Name':</span> {lastname}
        </h3>
        <h3>
          <span>'Email':</span> {email}
        </h3>
      </div>
      <div className="div-btn text-center ">
        <Link to="/createprofile/viewprofile/editprofile">
          <button className=" btn-p border-2 border-cyan-500/75 rounded-lg px-8 py-2 shadow-md">
            {' '}
            Edit Profile
          </button>
        </Link>
        <Link to='/'>
          <button className=" btn-p border-2 border-cyan-500/75 rounded-lg px-8 py-2 shadow-md">
            {' '}
            Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
