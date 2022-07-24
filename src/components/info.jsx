import React from "react";
import profile from "../assets/profile image.svg";
import emailIcon from'../assets/email icon.svg'
import linkedInIcon from'../assets/linkedIn icon.svg'

export default function Info() {
  return (
    <div className="info">
      <div className="profile-image">
        <img src={profile} alt="profile" />
      </div>
      <div>
        <p className="name">Laura Smith</p>
        <p className="desig">Frontend Developer</p>
      </div>
      <h5 className="website">laurasmith.website</h5>
      <div className="contact-buttons">
        <img src={emailIcon} alt="" className="email-icon"/>
        <img src={linkedInIcon} alt="" className="linkedin-icon"/>
      </div>
    </div>
  );
}
