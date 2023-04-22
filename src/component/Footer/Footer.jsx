import React from 'react'
import "./footer.css"
import { FaTelegramPlane } from "react-icons/fa";
 import { FaTwitter } from "react-icons/fa";
 import { SiDiscord } from "react-icons/si";
 import { AiOutlineGithub} from "react-icons/ai";
 import { SiMedium } from "react-icons/si";

// AiOutlineMail
//FaTelegramPlane


const socials = [
 
  {id: 2, link: 'https://twitter.com', icon: <FaTwitter/>},
  {id: 3, link: 'https://medium.com', icon:  <SiMedium/>},
  {id: 4, link: 'https://github.com', icon: <AiOutlineGithub/>},
  {id: 5, link: 'https://discord.com', icon: <SiDiscord/>},
  {id: 6, link: 'https://telegram.org', icon: <FaTelegramPlane/>},
]

const Footer = () => {
  return (
    
        <div className='footer'>

          <div className='container footer__container'>
            
            <div className='copyright'><small>2023 &copy; Sugondese All Right Reserved</small></div>
            
            <div className='footer__logo'>
              {
                socials.map(social=> <a key={social.id} href={social.link} 
                  target ="_blank" rel="noopener noreferrer">{social.icon}</a>)
              }
            </div>

          </div>
      </div>
   
  )
}

export default Footer