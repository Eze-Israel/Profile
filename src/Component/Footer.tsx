import React from 'react'
import {  FaLinkedin,FaInstagram, FaFacebook, FaTwitter,} from 'react-icons/fa';
import Link from 'next/link'
import Image from 'next/image';

const Footer = () => {
   const  date = new Date().getFullYear();
  return (
  <div className='footer'>
         <div>
        <Link href="/" >
          <Image 
          alt='logo'
          height={200}
          width={200}
          src="/images/logo.png"
          className='mx-auto'
          />
           </Link>
           </div>
    <div className='navigation'>
      <ul className='nav-menu-show'>
        <Link href= "/"> <li className='footlist'>Home</li></Link>
        <Link href= "#about"> <li className='footlist'>About Me</li></Link>
        <Link href= "#services"> <li className='footlist'>Services</li></Link>
        <Link href= "#projects"> <li className='footlist'> Projects</li></Link>
        <Link href= "#testimonies"> <li className='footlist'>Testimonies</li></Link>
        <Link href= "#contact"> <li className='footlist'>Contact</li></Link>
      </ul>
    </div>
    <div className='socials'>
      <FaFacebook  className='facebook '/>
      <FaTwitter className='twitter' />
      <FaInstagram   className='insta' />
      <FaLinkedin className='linked' />
    </div>

   <div className='copyright'> <p > &copy; {date} <b style={{
    color:"orange"
   }}> <b>M</b>umair</b> All Rights Reserved,inc.</p></div>



</div>
     
  )
}


export default Footer