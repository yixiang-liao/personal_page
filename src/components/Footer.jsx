import React from "react";
import profile from "../data/profile.json";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
    <div className="wave-top">
  {/* <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
    <path
      d="M0,0 C360,100 1080,0 1440,100 L1440,0 L0,0 Z"
      fill="#272525"
    />
  </svg> */}
</div>
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="./logo_2_工作區域 1.png" alt="logo" />
          <hr />
          <h1>廖翊翔(Eason)</h1>
        </div>
        <div className="line"></div>
        <div className="footer-contact">
          <h2>Contact</h2>
              {/* <hr/> */}
          <div className="contact-text">
            <div className="contact-text">
              <div className="cell">Cell: {profile.cell}</div>
              <div className="email">Email: {profile.email}</div>
            </div>
          </div>
        </div>
        <div className="footer-links">
            <h2>Links</h2>
            {/* <hr/> */}
          <div className="social-links">
            <a href={profile.linkedin} target="_blank">
              <AiFillLinkedin className="icon" />
            </a>
            <a href={profile.github} target="_blank">
              <AiOutlineGithub className="icon" />
            </a>
            <a href={profile.instagram} target="_blank">
              <AiFillInstagram className="icon" />
            </a>
            <a href={profile.leetcode} target="_blank">
              <SiLeetcode className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© {year} I-Hsiang, Liao. All rights reserved.</p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
