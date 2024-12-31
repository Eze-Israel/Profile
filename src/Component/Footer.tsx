import React from 'react'
import { FaPhone, FaEnvelope, FaLocationArrow , FaLinkedin, FaGithub,FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
   const  date = new Date().getFullYear();
  return (
    <div className='footer'>
     <span><FaEnvelope className='mycontact' />EzeIsraeloluoma123@gmail.com</span>
     <span><FaPhone className='mycontact'/>+2347061033459</span>
     
     
     <FaLinkedin className='linked'/>
     <FaGithub className="hub"/>
      <FaWhatsapp className='wats' />
     <p> &copy; {date} Eze Israel Oluomachukwu. All Rights Reserved.</p>
     <span><FaLocationArrow className='mycontact'/>Lagos State Nigeria</span> 
      </div>
  )
}


export default Footer