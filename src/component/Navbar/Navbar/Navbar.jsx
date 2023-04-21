

// import {IoDownload, RxCross2, RxHamburgerMenu} from 'react-icons/all'
import { BiMenu, BiX } from "react-icons/bi";

// import {RxCross2, RxHamburgerMenu} from 'react-icons'GrMenu, BiX

import { useState } from 'react'
import "./navbar.css"

const Navbar = () => {
      const[open, setOpen] = useState(false)

    const NavMenu = () => {
      return (
        <div className="nav__menu-container ">
          <div className="nav__menu-container-link scale-up-ver-top">
            <ul className="nav__menu-link">
              <li><a href="#doc">About</a></li>
              <li><a href="#comm">Solution</a></li>
              <li><a href="#comm">How it Works</a></li>
              <li><a href="#comm">Roadmap</a></li>
              <li><a href="#comm">White paper</a></li>
            </ul>

          <div className="nav__menu-btn">

              {/* <button className='nav__login-btn'><a href="/" target="_blank" rel="noopener noreferrer">Log in</a></button>
              <button className="btn nav__launchapp-btn">
                <a href="/" target="_blank" rel="noopener noreferrer">LAUNCH APP</a>
              </button> */}
          </div>
          </div>
          <div className="nav__menu-container-link-sign" />
        </div>
      );
    }

      return (

          <nav>
            <div className="container nav__container">
              
                <div className="nav__logo">
                  <img src="/../public/asset/logo.png" alt="logo" />
                </div>
                
              
                <div className="nav__link">
                          <ul className="nav-link">
                            <li><a href="#doc">About</a></li>
                            <li><a href="#comm">Solution</a></li>
                            <li><a href="#comm">How it Works</a></li>
                            {/* <li><a href="#comm">Roadmap</a></li>
                            <li><a href="#comm">White paper</a></li> */}
                          </ul>
                 </div>
              

                <div className="nav__btn">
                
                      {/* <button className='login-btn'><a href="/" target="_blank" rel="noopener noreferrer">Log In</a></button>
                      <button className="btn launchapp-btn"><a href="/" target="_blank" rel="noopener noreferrer">LAUNCH APP</a></button>  */}
                      {open ? <BiX className='ham__cro' onClick={()=>setOpen(false)}/> : < BiMenu className='ham__cro' onClick={()=>setOpen(true)}/> }
                      
                </div>
              
                 
               
            </div>
            
            
             {open ? <NavMenu/>:"" }
              
          </nav>
      
    )

  
}


  // const data = [
  //   {id: 1, link: '#about', title: 'About', icon:''},
  //   {id: 2, link:'#solution', title: 'Solution', icon:''},
  //   {id: 3, link:'#howitworks', title: 'How it works', icon:''},
  //   {id: 4, link: '#roadmap', title: 'Roadmap', icon:''},
  //   {id: 5, link: '#whitepaper', title: 'White paper', icon:'IoDownload'}
  //   ]

     

export default Navbar

