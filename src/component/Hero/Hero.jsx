
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
                        <h1 className="">$Pepe</h1>
                        <p className="">We assist and connect businesses to markets and researchers to gather quality, useful, and factual insights to inform their business strategies and plans for business growth</p>
                      
                    </div>
                    
                    <div className="  hero__inner-cont__right">
                        <img src= {pepe} alt=""  className="image"/>
                        
                    </div>
             
        </div>
    </div>
  )
}

export default Hero