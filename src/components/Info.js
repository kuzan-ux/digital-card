import React from "react"
import { FaEnvelope } from "react-icons/fa";
import pics from "../image/pics.jpg"

function Info() {
  return(
    <div className="info-comp">
      <img src= { pics } className='profile-pic' alt="profile-pic"/>
      <h2 className="name-tag">Oghenetega</h2>
      <h3 className="job-tag">Frontend Developer</h3>
      <h5 className="link-tag"><a href="https://github.com/kuzan-ux">https://github.com/kuzan-ux</a></h5>
      <button type="button" className="btn"><span><FaEnvelope/></span> Email Me</button>
    </div>
  )
}

export default Info