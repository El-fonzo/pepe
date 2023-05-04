
import React from 'react'
import './hero1.css'
import lig from  '../../asset/newtwo.png'

const Hero = () => {
   
    
  return (
    <div id='#home' >
        <div className="container hero__inner-cont">
        
                
                    <div className="  hero__inner-cont__left ">
                        <p className='heading'>A Journey to the moon</p>
                        <h1 className='hero-heading'>Welcome to <span>LIGMA</span></h1>
                        <p className="">$LIGMA is an erc20 0 tax token based on the neo-famous ligma balls meme. Built and backed by a seasoned team and a well connected influencer network, we aim to ligma balls. 
</p>
                        
                        <div className="buttondiv">

                            <button className="btn hero-btn">
                                <a href="/" target="_blank" rel="noopener noreferrer">Join Community </a>
                            </button>
                            <button className="btn hero-btn">
                                <a href="/" target="_blank" rel="noopener noreferrer">Learn More </a>
                            </button>
                        </div>

                    </div>
                  
                    <div className="hero-img">
                       
                    <img src= {lig} alt="hero picture"  className="image"/>
                    </div>
                </div>



{/*                     
                    <div className="  hero__inner-cont__right ">
                         <img src= {pepe} alt=""  className="image"/>
                    </div> */}
                    

                {/* <div className="hero">
                    <div className="hero-text">
                    <h1>We make it clear and simple <br/><span>LIGMA</span></h1>
                    
                    </div>
                   

                     <div className="  hero__inner-cont__right">
                        <img src= {pepe} alt=""  className="image"/>
                        
                    </div>
                </div> */}
             
       
    </div>
  )
}

export default Hero