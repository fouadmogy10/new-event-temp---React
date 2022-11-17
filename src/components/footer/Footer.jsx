import React from 'react'
import { FaFacebookF,FaTwitter,FaTelegramPlane ,FaTiktok,FaGithub} from 'react-icons/fa';
import { RiFlutterFill } from "react-icons/ri";
import { GoZap } from "react-icons/go";
function Footer() {
  return (
    <div className='py-5 text-center footer' id='CONTACT'>
        <span className='fw-bold text-muted '>Copyright © 2016 Your Company | Design: <a href="!#" className='text-decoration-none'><RiFlutterFill/>OUAD </a> <GoZap/></span>
        <ul className='d-flex  text center justify-content-center'>
            <li><FaFacebookF/></li>
            <li><FaTwitter/></li>
            <li><FaTelegramPlane/></li>
            <li><FaTiktok/></li>
            <li><FaGithub/></li>
        </ul>
    </div>
  )
}

export default Footer