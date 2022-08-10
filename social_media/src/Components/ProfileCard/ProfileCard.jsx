import React from 'react'
import Cover from "../../img/cover.jpg"
import Profile from "../../img/profileImg.jpg"
import './ProfileCard.css'

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        <div className="ProfileImage">
            <img src={Cover} alt="" id='coverPic'/>
            <img src={Profile} alt="" id='profilePic'/>
        </div>
        <div className="ProfileName">
            <span id='ProfileNameName'>Name Lastname</span>
            <span id='ProfileNameJob'>Senior Ui/Ux Designer</span>
        </div>

        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>6,890</span>
                    <span>Followings</span>
                </div>
                <div className='vl'></div>
                <div className="follow">
                    <span>1</span>
                    <span>Followers</span>
                </div>
            </div>
            <hr />
        </div>
        <span>My Profile</span>
    </div>
  )
}

export default ProfileCard