
import React from 'react'
import './hero.css'
import pepe from  '../../asset/pepe.png'

const Hero = () => {
    const style = {
        backgroundSize: ' 100% 100%',
        backgroundPosition: '0px 0px,0px 0px,0px 0px,0px 0px',
       
    } 
    
  return (
    <div style={ style} >
        <div className="container hero__inner-cont">
        
                
                    <div className="  hero__inner-cont__left ">
                        <p>Reach the moon</p>
                        <h1 className="">From memes to riches.</h1>
                        <p className="">Sugondese toke($sugs) is a community focused, decentraloised crypto currency with instantrewards for holder</p>
                        <button className="btn hero-btn">
                            <a href="/" target="_blank" rel="noopener noreferrer">BUY $Sugs</a>
                        </button>
                    </div>
                    
                    <div className="  hero__inner-cont__right">
                        <img src= {pepe} alt=""  className="image"/>
                        
                    </div>
             
        </div>
    </div>
  )
}

export default Hero