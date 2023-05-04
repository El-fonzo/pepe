
import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './hero1.css';
import lig from  '../../asset/newtwo.png';
import twitter from '../../asset/twitter.png';
import etherscan from '../../asset/etherscan.png';
import telegram from '../../asset/telgram.png';
import uniswap from '../../asset/uniswap.png'
import dextool from '../../asset/dextools.png'
 

const Hero = () => {
   
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
  return (
    <div id='#home' >
        <div className="container hero__inner-cont">
        
                
                    <div className="  hero__inner-cont__left data-aos= zoom-in ">
                        <p className='heading'>A Journey to the moon</p>
                        <h1 className='hero-heading'>Welcome to <span>LIGMA</span></h1>
                        <p className="">$LIGMA is an erc20 0 tax token based on the neo-famous ligma balls meme. Built and backed by a seasoned team and a well connected influencer network, we aim to ligma balls. 
</p>
                        
                        <div className="buttondiv">

                            <button className="btn hero-btn">
                                <a href="https://t.me/ligmacoin" target="_blank" rel="noopener noreferrer">Join Community </a>
                            </button>
                            <button className="btn hero-btn">
                                <a href="https://etherscan.io/token/0x8ec891a6f3897700de73c01d4ffe7f34f0330b66#code" target="_blank" rel="noopener noreferrer">Buy Ligma </a>
                            </button>
                        </div>
                        <div className="logo-link">
                             <a href="https://twitter.com/ligmaerc" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></a>
                            <a href="  https://etherscan.io/token/0x8ec891a6f3897700de73c01d4ffe7f34f0330b66#code" target="_blank" rel="noopener noreferrer"><img src={etherscan} alt="etherscan" /></a>
                             <a href="https://t.me/ligmacoin" target="_blank" rel="noopener noreferrer"><img src={telegram} alt="telegra" /></a>
                             <a href="https://app.uniswap.org/#/swap" target="_blank" rel="noopener noreferrer"><img src={uniswap} alt="uniswap" /></a>
                             <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xa9671c88c60ecfda5d87176cee868867e84a0ad3" target="_blank" rel="noopener noreferrer"><img src={dextool} alt="dextool" /></a>
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