import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
      <div className="icon1">
        <a href="https://twitter.com/kiingtegzy"><button type="button" className="icon2"><FaTwitter/></button></a>
        <a href="https://www.linkedin.com/in/ighure-oghenetega-3527b01b4/"> <button type="button" className="icon2"><FaLinkedin/></button></a>
        <a href="https://github.com/kuzan-ux"><button type="button" className="icon2"><FaGithub/></button></a>
      </div>
    </div>
  )
}

export default Footer