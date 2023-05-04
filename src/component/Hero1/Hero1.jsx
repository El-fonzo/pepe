
import React from 'react';
import './hero1.css';
import lig from  '../../asset/newtwo.png';
import twitter from '../../asset/twitter.png';
import etherscan from '../../asset/etherscan.png';
import telegram from '../../asset/telgram.png';
import uniswap from '../../asset/uniswap.png'
 

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
                                <a href="https://t.me/ligmacoin" target="_blank" rel="noopener noreferrer">Join Community </a>
                            </button>
                            <button className="btn hero-btn">
                                <a href="/" target="_blank" rel="noopener noreferrer">Buy Ligma </a>
                            </button>
                        </div>
                        <div className="logo-link">
                             <a href="/" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter logo" /></a>
                            <a href="https://twitter.com/ligmaerc" target="_blank" rel="noopener noreferrer"><img src={etherscan} alt="etherscan logo" /></a>
                             <a href="https://t.me/ligmacoin" target="_blank" rel="noopener noreferrer"><img src={telegram} alt="telegram logo" /></a>
                             <a href="/" target="_blank" rel="noopener noreferrer"><img src={uniswap} alt="uniswap logo" /></a>
                        </div>
  </div>
                  
                    <div className="hero-img">
                       
                    <img src= {lig} alt="hero picture"  className="image"/>
                    </div>
                </div>




             
       
    </div>
  )
}

export default Hero