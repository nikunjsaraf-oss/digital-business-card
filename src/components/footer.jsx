import React from "react";
import twitterIcon from "../assets/Twitter Icon.svg";
import facebookIcon from "../assets/Facebook Icon.svg";
import gitHubIcon from "../assets/GitHub Icon.svg";
import instagramIcon from "../assets/Instagram Icon.svg";

export default function Footer() {
  return (
    <div className="footer-section">
      <img src={twitterIcon} alt="" className="twitter-icon"/>
      <img src={facebookIcon} alt="" />
      <img src={instagramIcon} alt="" />
      <img src={gitHubIcon} alt="" className="githubIcon"/>
    </div>
  );
}
